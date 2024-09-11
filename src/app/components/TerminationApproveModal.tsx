import {FC, useContext, useState} from 'react';
import {Button} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {defineMessages} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        padding: '2rem',
        '@media (min-width: 768px)': {
            minWidth: '514px',
        },
        maxWidth: '514px',
    },
    deactivatedContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    deactivatedText: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary, // Replace with the exact value of textColor
        fontFamily: 'Quicksand, sans-serif',
        textAlign: 'center',
        fontWeight: '700',
    },
    defaultText: {
        fontSize: '1rem',
        color: theme.palette.text.secondary, // Replace with the exact value of lineGray
        fontFamily: 'Open Sans, sans-serif',
        marginTop: '1rem',
    },
    mainText: {
        fontSize: '2rem',
        color: theme.palette.text.primary, // Replace with the exact value of textColor
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    buttonContainer: {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.5rem',
        width: '100%',
    },
}));

const localized = defineMessages({
    deactivated: {
        id: 'TerminationApproveModal_deactivated',
        defaultMessage: 'Your account has been deactivated',
    },
    goToMain: {
        id: 'TerminationApproveModal_goToMain',
        defaultMessage: 'Go to Main page',
    },
    areYouSureDeactivate: {
        id: 'TerminationApproveModal_areYouSureDeactivate',
        defaultMessage: 'Are you sure that you want to deactivate your account?',
    },
    youWontBeAble: {
        id: 'TerminationApproveModal_youWontBeAble',
        defaultMessage: "You won't be able to recover your account",
    },
    keepAccounnt: {
        id: 'TerminationApproveModal_keepAccounnt',
        defaultMessage: 'Keep my account',
    },
    deactivate: {
        id: 'TerminationApproveModal_deactivate',
        defaultMessage: 'Deactivate',
    },
});

interface TerminationApproveModalProps {
    disabled: boolean;
}

const TerminationApproveModal: FC<TerminationApproveModalProps> = ({disabled}) => {
    const [isDeactivated, setIsDeactivated] = useState(false);

    const {openModal, closeModal} = useContext(ModalContext);

    const classes = useStyles();

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className={classes.container}>
                    {isDeactivated ? (
                        <div className={classes.deactivatedContainer}>
                            <div className={classes.deactivatedText}>
                                <LocalizedText label={localized.deactivated} />
                            </div>
                            <Button
                                sx={{
                                    bgcolor: '#15C370',
                                    color: '#fff',
                                    marginTop: 2,
                                    borderRadius: '20px',
                                    textTransform: 'none',
                                    fontFamily: 'OpenReg',
                                    fontSize: '16px',

                                    '&:hover': {
                                        bgcolor: '#15C370',
                                        opacity: 0.8,
                                    },
                                }}
                                onClick={closeModal}
                            >
                                <LocalizedText label={localized.goToMain} />
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <div className={classes.mainText}>
                                <LocalizedText label={localized.areYouSureDeactivate} />
                            </div>
                            <p className={classes.defaultText}>
                                <LocalizedText label={localized.youWontBeAble} />
                            </p>

                            <div className={classes.buttonContainer}>
                                <CustomButton closeModal={closeModal} width="auto" bgcolor="#15C370" color="#fff" borderColor="transparent">
                                    <LocalizedText label={localized.keepAccounnt} />
                                </CustomButton>
                                <CustomButton closeModal={closeModal} width="88px" bgcolor="white" color="#A9A9A9" borderColor="#A9A9A9">
                                    <LocalizedText label={localized.deactivate} />
                                </CustomButton>
                            </div>
                        </div>
                    )}
                </div>
            </ModalContent>
        ),
            true;
    };

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
            disabled={disabled}
        >
            <LocalizedText label={localized.deactivate} />
        </Button>
    );
};

export default TerminationApproveModal;
