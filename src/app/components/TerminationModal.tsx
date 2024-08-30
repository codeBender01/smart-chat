import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {useIntl} from 'react-intl';
import {
    Button,
    createTheme,
    FormControl,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    SelectChangeEvent,
    TextField,
    ThemeProvider,
} from '@mui/material';

import ModalProps from 'src/common/interfaces/modal.interface';
import LocalizedText from '@components/localize/LocalizedText';

interface TerminationModalProps extends ModalProps {
    isTerminated: boolean;
    setIsTerminated: Dispatch<SetStateAction<boolean>>;
}

const reasons = [
    {
        label: 'Changed my mind',
        value: 'changedMyMind',
    },
    {
        label: 'Problem with another party',
        value: 'party',
    },
    {
        label: 'Agreement issues',
        value: 'agreementIssue',
    },
    {
        label: 'Payment issues',
        value: 'paymentIssue',
    },
    {
        label: 'Found an alternative service',
        value: 'alternative',
    },
    {
        label: 'Other',
        value: 'other',
    },
];

const TerminationModal: FC<TerminationModalProps> = ({open, setOpen, setIsTerminated, isTerminated}) => {
    const [reason, setReason] = useState('');
    const [isReasonSelected, setIsReasonSelected] = useState(false);

    const intl = useIntl();

    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
        setIsReasonSelected(true);
    };

    const selectTheme = createTheme({
        components: {
            MuiSelect: {
                styleOverrides: {
                    root: {
                        padding: '0 12px',
                    },
                },
            },
            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B',
                        },
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        padding: '16px 24px',
                    },
                },
            },
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: 'OpenReg',
                        color: '#303030',

                        '&.Mui-focused': {
                            color: '#303030',
                        },
                    },
                },
            },
        },
    });

    const emailInputTheme = createTheme({
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
        },
    });

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <div className="bg-white rounded-[24px] top-[50%] left-[50%] relative translate-x-[-50%]  translate-y-[-50%] w-[95%] tablet:w-[514px] lg:w-[30%] py-8 px-6 flex flex-col items-center">
                <div className="text-xl text-textColor font-boldQuick">
                    <LocalizedText label={{id: 'areYouSureDeal', defaultMessage: 'Are you sure that you want to terminate your deal?'}} />
                </div>
                <div className="flex flex-col gap-4 w-[100%]">
                    <ThemeProvider theme={selectTheme}>
                        <FormControl
                            sx={{
                                marginTop: 2,
                            }}
                            fullWidth
                        >
                            <InputLabel id="demo-simple-select-label">
                                <LocalizedText label={{id: 'reason', defaultMessage: 'Reason'}} />
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                label="Reason"
                                id="demo-simple-select"
                                value={reason}
                                onChange={handleChange}
                            >
                                {reasons.map(r => {
                                    return (
                                        <MenuItem key={r.label} value={r.value}>
                                            <LocalizedText label={{id: r.value, defaultMessage: r.label}} />
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl
                            fullWidth
                            sx={{
                                height: isReasonSelected ? 'auto' : 0,
                                overflowY: 'hidden',
                                transition: 'all 0.6s',
                            }}
                        >
                            <TextField
                                placeholder={intl.formatMessage({
                                    id: 'leaveReason',
                                    defaultMessage: 'Leave your reason',
                                })}
                            />
                        </FormControl>
                    </ThemeProvider>
                </div>

                <p className="mt-6 text-lineGray font-lato font-normal text-default">
                    <LocalizedText
                        label={{
                            id: 'byClicking',
                            defaultMessage: 'By clicking Terminate, you confirm that you have read, consent and agree to our',
                        }}
                    />
                    <span className="text-linkBlue underline cursor-pointer hover:opacity-85 duration-100">
                        <LocalizedText label={{id: 'terms', defaultMessage: 'Terms and conditions'}} />
                    </span>{' '}
                    <LocalizedText label={{id: 'and', defaultMessage: 'and'}} />{' '}
                    <span className="text-linkBlue underline cursor-pointer hover:opacity-85 duration-100">
                        <LocalizedText label={{id: 'cancellation', defaultMessage: 'Cancellation policy'}} />
                    </span>
                    .
                </p>

                <ThemeProvider theme={emailInputTheme}>
                    <div className="mt-6 flex justify-end gap-2 w-[100%]">
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
                                bgcolor: '#E2542C',
                                color: '#fff',
                                '&:hover': {
                                    bgcolor: '#E2542C',
                                    opacity: 0.8,
                                },
                            }}
                            onClick={() => {
                                setOpen(false);
                                setIsTerminated(!isTerminated);
                            }}
                        >
                            <LocalizedText label={{id: 'terminate', defaultMessage: 'Terminate'}} />
                        </Button>
                    </div>
                </ThemeProvider>
            </div>
        </Modal>
    );
};

export default TerminationModal;
