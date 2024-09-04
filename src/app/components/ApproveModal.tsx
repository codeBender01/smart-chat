import {FC, useContext} from 'react';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import {Button, Box, Typography} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

const ApproveModal: FC = () => {
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <Box
                    sx={{
                        padding: '32px',
                        minWidth: {xs: 'auto', sm: '514px'},
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                            color: '#15C370',
                        }}
                    >
                        <IoCheckmarkCircleOutline />
                    </Box>
                    <Typography
                        sx={{
                            color: '#282D41',
                            fontSize: '32px',
                            textAlign: 'center',
                            fontFamily: 'QuicksandBold, sans-serif',
                            margin: '32px 0',
                        }}
                    >
                        <LocalizedText label={{id: 'inviteSend', defaultMessage: 'Invite has been sent'}} />
                    </Typography>

                    <CustomButton closeModal={closeModal} width="30%" bgcolor="#15C370" color="#fff" borderColor="transparent">
                        <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                    </CustomButton>
                </Box>
            </ModalContent>
        ),
            true;
    };

    return (
        <div>
            <Button
                variant="contained"
                disableElevation
                disableRipple
                sx={{
                    bgcolor: '#15C370',
                    color: '#fff',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontFamily: 'OpenReg',
                    fontSize: '16px',
                    '&:hover': {
                        bgcolor: '#15C370',
                        opacity: 0.8,
                    },
                }}
                onClick={handleOpenModal}
            >
                <LocalizedText label={{id: 'send', defaultMessage: 'Send'}} />
            </Button>
        </div>
    );
};

export default ApproveModal;
