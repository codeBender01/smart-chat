import {FC} from 'react';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import {Button, createTheme, Modal, ThemeProvider} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

import ModalProps from 'src/common/interfaces/modal.interface';

type ApproveModal = ModalProps;

const ApproveModal: FC<ApproveModal> = ({open, setOpen}) => {
    const button = createTheme({
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
            <div className="bg-white rounded-[24px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] tablet:w-[514px] lg:w-[35%] py-8 px-6 flex flex-col items-center">
                <div className="flex items-center justify-center text-[64px] text-logoGreen">
                    <IoCheckmarkCircleOutline />
                </div>
                <h2 className="text-textColor text-xl text-center font-boldQuick my-6">
                    <LocalizedText label={{id: 'inviteSend', defaultMessage: 'Invite has been send'}} />
                </h2>
                <ThemeProvider theme={button}>
                    <Button
                        onClick={() => setOpen(false)}
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            fontSize: '20px',
                            height: '40px',
                            width: '30%',
                            margin: '0 auto',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                    </Button>
                </ThemeProvider>
            </div>
        </Modal>
    );
};

export default ApproveModal;
