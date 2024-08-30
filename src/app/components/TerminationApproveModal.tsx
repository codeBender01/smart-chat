import {FC, useContext, useState} from 'react';
import {Button, createTheme, Modal, ThemeProvider} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

const TerminationApproveModal: FC = () => {
    const [isDeactivated, setIsDeactivated] = useState(false);

    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className="p-8 tablet:min-w-[514px]">
                    {isDeactivated ? (
                        <div className="flex flex-col items-center">
                            <div className="text-xl text-textColor font-boldQuick text-center">
                                <LocalizedText label={{id: 'deactivated', defaultMessage: 'Your account has been deactivated'}} />
                            </div>
                            <ThemeProvider theme={emailInputTheme}>
                                <Button
                                    sx={{
                                        bgcolor: '#15C370',
                                        color: '#fff',
                                        marginTop: 2,
                                        '&:hover': {
                                            bgcolor: '#15C370',
                                            opacity: 0.8,
                                        },
                                    }}
                                    onClick={closeModal}
                                >
                                    <LocalizedText label={{id: 'goToMain', defaultMessage: 'Go to Main page'}} />
                                </Button>
                            </ThemeProvider>
                        </div>
                    ) : (
                        <div>
                            <div className="text-xl text-textColor font-boldQuick">
                                <LocalizedText
                                    label={{
                                        id: 'areYouSureDeactivate',
                                        defaultMessage: 'Are you sure that you want to deactivate your account?',
                                    }}
                                />
                            </div>
                            <p className="text-lineGray text-default font-mainSans mt-4">
                                <LocalizedText label={{id: 'youWontBeAble', defaultMessage: "You won't be able to recover your account"}} />
                            </p>

                            <ThemeProvider theme={emailInputTheme}>
                                <div className="mt-6 flex justify-end gap-2 w-[100%]">
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
                                        <LocalizedText label={{id: 'keepAccount', defaultMessage: ' Keep my account'}} />
                                    </Button>
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
                                        onClick={() => {
                                            setIsDeactivated(true);
                                        }}
                                    >
                                        <LocalizedText label={{id: 'deactivate', defaultMessage: 'Deacivate'}} />
                                    </Button>
                                </div>
                            </ThemeProvider>
                        </div>
                    )}
                </div>
            </ModalContent>
        ),
            true;
    };

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
        <Button
            variant="outlined"
            disableElevation
            disableRipple
            sx={{
                width: '120px',
                alignSelf: 'flex-end',
                borderRadius: '20px',
                textTransform: 'none',
                fontFamily: 'OpenReg',
                backgroundColor: 'transparent',
                borderColor: '#E2542C',
                borderWidth: '1px',
                color: '#E2542C',
                '&:hover': {
                    bgcolor: '#E2542C',
                    opacity: 0.8,
                    color: '#fff',
                    borderColor: '#E2542C',
                },
            }}
            onClick={handleOpenModal}
        >
            <LocalizedText label={{id: 'deactivate', defaultMessage: 'Deactivate'}} />
        </Button>
    );
};

export default TerminationApproveModal;
