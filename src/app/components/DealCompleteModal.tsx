import {FC, SetStateAction, useContext, Dispatch} from 'react';
import {Button, createTheme, FormControl, Rating, TextField, ThemeProvider} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {useIntl} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

interface DealCompletedModalProps {
    setIsDealApproved: Dispatch<SetStateAction<boolean>>;
}

const DealCompletedModal: FC<DealCompletedModalProps> = ({setIsDealApproved}) => {
    const intl = useIntl();

    const {openModal, closeModal} = useContext(ModalContext);

    const ratingTheme = createTheme({
        components: {
            MuiRating: {
                styleOverrides: {
                    root: {
                        color: '#15C370',
                        marginTop: '18px',
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

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className="p-8 min-w-[514px] flex flex-col items-center">
                    <h2 className="text-textColor text-xl font-boldQuick w-[80%] text-center">
                        <LocalizedText label={{id: 'dealCompleted', defaultMessage: 'The deal has been completed'}} />
                    </h2>
                    <div className="text-[#49454F] font-mainSans text-md mt-8">
                        <LocalizedText label={{id: 'rateACustomer', defaultMessage: 'Rate a customer/traveller'}} />
                    </div>
                    <ThemeProvider theme={ratingTheme}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        <div className="text-[#49454F] font-mainSans text-md mt-8">
                            <LocalizedText label={{id: 'leaveFeedback', defaultMessage: 'Leave a feedback'}} />{' '}
                        </div>
                        <FormControl
                            sx={{
                                marginTop: 2,
                            }}
                            fullWidth
                        >
                            <TextField
                                label={<LocalizedText label={{id: 'description', defaultMessage: 'Description'}} />}
                                multiline
                                placeholder={intl.formatMessage({
                                    id: 'typeHere',
                                    defaultMessage: 'Type your comment here',
                                })}
                                rows={3}
                                minRows={3}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        paddingBottom: 0,
                                        paddingRight: 0,
                                    },
                                    '& .MuiInputBase-input': {
                                        resize: 'both',
                                        overflow: 'auto',
                                    },
                                }}
                            />
                        </FormControl>

                        <div className="mt-8 flex self-end gap-2">
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
                                    bgcolor: '#15C370',
                                    color: '#fff',
                                    '&:hover': {
                                        bgcolor: '#15C370',
                                        opacity: 0.8,
                                    },
                                }}
                                onClick={closeModal}
                            >
                                <LocalizedText label={{id: 'send', defaultMessage: 'Send'}} />
                            </Button>
                        </div>
                    </ThemeProvider>
                </div>
            </ModalContent>
        ),
            true;
    };

    return (
        <Button
            variant="contained"
            sx={{
                zIndex: 1,
                backgroundColor: '#15C370',
                fontFamily: 'OpenReg',
                fontSize: 16,
                transitionDuration: '500ms',
                borderRadius: '20px',
                height: '40px',
                padding: '0 26px',
                textTransform: 'capitalize',
                '&:hover': {
                    backgroundColor: '#15C370',
                    opacity: 0.8,
                },
            }}
            onClick={() => {
                setIsDealApproved(true);
                handleOpenModal();
            }}
        >
            Yes
        </Button>
    );
};

export default DealCompletedModal;
