import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {useIntl} from 'react-intl';
import {Button, createTheme, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, ThemeProvider} from '@mui/material';

import {IoMdCloseCircleOutline} from 'react-icons/io';

import LocalizedText from '@components/localize/LocalizedText';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

interface TerminationModalProps {
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

const TerminationModal: FC<TerminationModalProps> = ({setIsTerminated, isTerminated}) => {
    const [reason, setReason] = useState<string>('');
    const [isReasonSelected, setIsReasonSelected] = useState(false);

    const {openModal, closeModal} = useContext(ModalContext);

    const intl = useIntl();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setReason(event.target.value);
        setIsReasonSelected(true);
        console.log('ejen amy');
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

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className="p-8">
                    <div className="text-xl text-textColor font-boldQuick">
                        <LocalizedText
                            label={{id: 'areYouSureDeal', defaultMessage: 'Are you sure that you want to terminate your deal?'}}
                        />
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
                                    onChange={(event: SelectChangeEvent) => {
                                        setReason(event.target.value);
                                        setIsReasonSelected(true);
                                    }}
                                >
                                    {reasons.map(r => {
                                        return (
                                            <MenuItem key={r.value} value={r.label}>
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
                                onClick={closeModal}
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
                                    closeModal();
                                    setIsTerminated(!isTerminated);
                                }}
                            >
                                <LocalizedText label={{id: 'terminate', defaultMessage: 'Terminate'}} />
                            </Button>
                        </div>
                    </ThemeProvider>
                </div>
            </ModalContent>
        );
    };

    return (
        <div
            onClick={handleOpenModal}
            className="flex items-center text-alertRed text-default py-[16px] px-[24px] font-mainSans gap-2 hover:opacity-80 duration-200 cursor-pointer"
        >
            <IoMdCloseCircleOutline />
            <LocalizedText label={{id: 'terminateDeal', defaultMessage: 'Terminate the deal'}} />
        </div>
    );
};

export default TerminationModal;
