import {Dispatch, FC, SetStateAction, useState} from 'react';
import {Button, createTheme, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField, ThemeProvider} from '@mui/material';

import ModalProps from 'src/common/interfaces/modal.interface';
import LocalizedText from '@components/localize/LocalizedText';

interface AdduserModalProps extends ModalProps {
    isEmailSent: boolean;
    setIsEmailSent: Dispatch<SetStateAction<boolean>>;
    setInviteModal: Dispatch<SetStateAction<boolean>>;
}

const roles = [
    {
        id: 1,
        title: 'Parcel receiver',
        value: 'parcelReceiver',
    },
    {
        id: 2,
        title: 'Parcel sender',
        value: 'parcelSender',
    },
];

const AddUserModal: FC<AdduserModalProps> = ({open, setOpen, isEmailSent, setIsEmailSent, setInviteModal}) => {
    const [selectedRole, setSelectedRole] = useState('');

    const emailInputTheme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        width: '100%',
                        color: '#282D41',
                        fontFamily: 'OpenReg',
                        marginTop: '10px',
                        '& .MuiInputBase-input': {
                            padding: '12px 18px',
                            fontFamily: 'OpenReg, sans-serif',
                        },
                        input: {
                            '::placeholder': {
                                color: '#49454F',
                                opacity: 0.8,
                            },
                        },
                    },
                },
            },

            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        width: '88px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
        },
    });

    const handleRoleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedRole((event.target as HTMLInputElement).value);
    };

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="bg-white rounded-[24px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] tablet:w-[515px] lg:w-[35%] py-8 px-8">
                <div className="text-xl text-textColor font-boldQuick">
                    {isEmailSent ? (
                        <LocalizedText
                            label={{id: 'areYouSure', defaultMessage: 'Are you sure that you want to change the {name}?'}}
                            labelParams={{name: 'customer2'}}
                        />
                    ) : (
                        <LocalizedText label={{id: 'addCustomer', defaultMessage: 'Add a {name}'}} labelParams={{name: 'customer2'}} />
                    )}
                </div>
                <p className="text-sm text-lineGray font-mainSans">
                    <LocalizedText label={{id: 'enterEmail', defaultMessage: 'Enter user email and we will send invite-message'}} />
                </p>
                <div className="font-boldQuick text-md text-textColor mt-4 mb-2">
                    <LocalizedText
                        label={{
                            id: 'customerRole',
                            defaultMessage: '{name} role',
                        }}
                        labelParams={{name: 'Customer2'}}
                    />
                </div>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="receiver"
                        name="radio-buttons-group"
                        onChange={handleRoleSelect}
                        sx={{
                            '& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked': {
                                color: '#15C370',
                            },
                        }}
                    >
                        {roles.map(r => {
                            return (
                                <FormControlLabel
                                    value={r.value}
                                    control={<Radio />}
                                    label={<LocalizedText label={{id: r.value, defaultMessage: r.title}} />}
                                    key={r.id}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            color: r.value === selectedRole ? '#15C370' : '#838383',
                                        },
                                    }}
                                />
                            );
                        })}
                    </RadioGroup>
                </FormControl>
                <ThemeProvider theme={emailInputTheme}>
                    <TextField
                        sx={{
                            width: '100%',
                        }}
                        placeholder="Email"
                    />
                    <div className="mt-3 flex justify-end gap-2">
                        <Button
                            sx={{
                                bgcolor: 'white',
                                color: '#A9A9A9',
                                border: '1px solid #A9A9A9',
                                '&:hover': {
                                    bgcolor: 'white',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => setOpen(false)}
                        >
                            <LocalizedText label={{id: 'cancel', defaultMessage: 'Cancel'}} />
                        </Button>
                        <Button
                            sx={{
                                bgcolor: '#15C370',
                                color: '#fff',
                                '&:hover': {
                                    bgcolor: '#15C370',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => {
                                setOpen(false);
                                setInviteModal(true);
                                setIsEmailSent(true);
                            }}
                        >
                            <LocalizedText label={{id: 'send', defaultMessage: 'Send'}} />
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </Modal>
    );
};

export default AddUserModal;
