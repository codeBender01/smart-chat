import {FC, useState} from 'react';

import {Modal, ThemeProvider, Button, createTheme} from '@mui/material';

import ModalProps from 'src/common/interfaces/modal.interface';

type TerminationApproveModalProps = ModalProps;

const TerminationApproveModal: FC<TerminationApproveModalProps> = ({open, setOpen}) => {
    const [isDeactivated, setIsDeactivated] = useState(false);

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
            <div className="bg-white rounded-[24px] top-[50%] left-[50%] relative translate-x-[-50%] translate-y-[-50%] w-[95%] tablet:w-[35%] py-8 px-6 flex flex-col items-center">
                {isDeactivated ? (
                    <div className="flex flex-col items-center">
                        <div className="text-xl text-textColor font-boldQuick text-center">Your account has been deactivated</div>
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
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                Go to Main page
                            </Button>
                        </ThemeProvider>
                    </div>
                ) : (
                    <div>
                        <div className="text-xl text-textColor font-boldQuick">Are you sure that you want to deactivate your account?</div>
                        <p className="text-lineGray text-default font-mainSans mt-4">You won't be able to recover your account</p>

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
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    Keep my account
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
                                    Deactivate
                                </Button>
                            </div>
                        </ThemeProvider>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default TerminationApproveModal;
