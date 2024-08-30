import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {Button, createTheme, FormControl, FormControlLabel, Radio, RadioGroup, TextField, ThemeProvider} from '@mui/material';
import Typography from '@mui/material/Typography';

import ApproveModal from './ApproveModal';

import ModalProps from 'src/common/interfaces/modal.interface';
import LocalizedText from '@components/localize/LocalizedText';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalLayout} from '@components/modal/ModalLayout';

import AddUser from 'src/common/svgs/AddUser';

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

    const {openModal, closeModal} = useContext(ModalContext);

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

    const handleOpenModal = () => {
        openModal(
            <ModalLayout title={''}>
                <div className="w-[100%] tablet:min-w-[514px] px-8 py-6 flex flex-col">
                    <div className="text-xl text-textColor font-boldQuick">
                        {isEmailSent ? (
                            <Typography variant="h2">
                                <LocalizedText
                                    label={{id: 'areYouSure', defaultMessage: 'Are you sure that you want to change the {name}?'}}
                                    labelParams={{name: 'customer2'}}
                                />
                            </Typography>
                        ) : (
                            <Typography variant="h2">
                                <LocalizedText
                                    label={{id: 'addCustomer', defaultMessage: 'Add a {name}'}}
                                    labelParams={{name: 'customer2'}}
                                />
                            </Typography>
                        )}
                    </div>
                    <div>
                        <Typography variant="subtitle1">
                            <LocalizedText label={{id: 'enterEmail', defaultMessage: 'Enter user email and we will send invite-message'}} />
                        </Typography>
                    </div>
                    <div className="text-md font-boldQuick text-textColor mt-4 mb-2">
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
                                color: '#282D41',
                                fontFamily: 'OpenReg',
                                marginTop: '10px',
                                marginBottom: '32px',
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
                            }}
                            placeholder="Email"
                        />
                        <div className="mt-3 flex justify-end gap-2">
                            <Button
                                disableElevation
                                disableRipple
                                variant="outlined"
                                sx={{
                                    bgcolor: 'white',
                                    color: '#A9A9A9',
                                    border: '1px solid #A9A9A9',
                                    borderRadius: '20px',
                                    width: '88px',
                                    textTransform: 'none',
                                    fontFamily: 'OpenReg',
                                    '&:hover': {
                                        bgcolor: 'white',
                                        opacity: 0.8,
                                    },
                                }}
                                onClick={closeModal}
                            >
                                <LocalizedText label={{id: 'cancel', defaultMessage: 'Cancel'}} />
                            </Button>
                            <ApproveModal />
                        </div>
                    </ThemeProvider>
                </div>
                ,
            </ModalLayout>,
            true
        );
    };

    return (
        <div onClick={handleOpenModal}>
            <AddUser />
        </div>
    );
};

export default AddUserModal;
