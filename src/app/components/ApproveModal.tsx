import {FC, useContext} from 'react';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import {Button, Box, Typography} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';
import {defineMessages} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

const localized = defineMessages({
    send: {
        id: 'ApproveModal_send',
        defaultMessage: 'Send',
    },
    inviteSend: {
        id: 'ApproveModal_inviteSend',
        defaultMessage: 'Invite has been send',
    },
    goBack: {
        id: 'ApproveModal_goBack',
        defaultMessage: 'Back',
    },
});

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
                        sx={theme => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                            color: theme.palette.primary.main,
                        })}
                    >
                        <IoCheckmarkCircleOutline />
                    </Box>
                    <Typography
                        sx={theme => ({
                            color: theme.palette.text.primary,
                            fontSize: '32px',
                            textAlign: 'center',
                            fontFamily: 'QuicksandBold, sans-serif',
                            margin: '32px 0',
                        })}
                    >
                        <LocalizedText label={localized.inviteSend} />
                    </Typography>

                    <CustomButton closeModal={closeModal} width="30%" bgcolor="#15C370" color="#fff" borderColor="transparent">
                        <LocalizedText label={localized.goBack} />
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
                sx={theme => ({
                    bgcolor: theme.palette.primary.main,
                    color: '#fff',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontFamily: 'OpenReg',
                    fontSize: '16px',
                    '&:hover': {
                        bgcolor: theme.palette.primary.main,
                        opacity: 0.8,
                    },
                })}
                onClick={handleOpenModal}
            >
                <LocalizedText label={localized.send} />
            </Button>
        </div>
    );
};

export default ApproveModal;
