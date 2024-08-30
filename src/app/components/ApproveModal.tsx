import {FC, useContext} from 'react';
import {IoCheckmarkCircleOutline} from 'react-icons/io5';
import {Button} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

import ModalProps from 'src/common/interfaces/modal.interface';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';

type ApproveModal = ModalProps;

const ApproveModal: FC = () => {
    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className="p-8 tablet:min-w-[514px] flex flex-col items-center">
                    <div className="flex items-center justify-center text-[64px] text-logoGreen">
                        <IoCheckmarkCircleOutline />
                    </div>
                    <h2 className="text-textColor text-xl text-center font-boldQuick my-6">
                        <LocalizedText label={{id: 'inviteSend', defaultMessage: 'Invite has been send'}} />
                    </h2>
                    <Button
                        variant="contained"
                        disableElevation
                        disableRipple
                        onClick={closeModal}
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            fontSize: '20px',
                            height: '40px',
                            width: '30%',
                            margin: '0 auto',
                            borderRadius: '20px',
                            textTransform: 'none',
                            fontFamily: 'OpenReg',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        <LocalizedText label={{id: 'goBack', defaultMessage: 'Back'}} />
                    </Button>
                </div>
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
