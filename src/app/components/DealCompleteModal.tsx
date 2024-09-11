import {FC, SetStateAction, useContext, Dispatch} from 'react';
import {Button, FormControl, Rating, TextField} from '@mui/material';
import {useLocation} from 'react-router-dom';

import LocalizedText from '@components/localize/LocalizedText';
import {useIntl} from 'react-intl';
import {defineMessages} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

import {setDealUpdate} from '@store/dealUpdateSlice';
import {useDispatch} from 'react-redux';

interface DealCompletedModalProps {
    setIsDealApproved: Dispatch<SetStateAction<boolean>>;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        padding: '2rem',
        minWidth: '514px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        color: theme.palette.text.primary,
        fontSize: '32px',
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        width: '80%',
        textAlign: 'center',
    },
    textMd: {
        color: theme.palette.text.primary,
        fontFamily: 'OpenReg, sans-serif',
        fontSize: '18px',
        marginTop: '2rem',
    },
    mt8: {
        marginTop: '2rem',
    },
    buttonGroup: {
        marginTop: '2rem',
        display: 'flex',
        alignSelf: 'flex-end',
        gap: '0.5rem',
    },
}));

const localized = defineMessages({
    dealCompleted: {
        id: 'DealCompletedModal_dealCompleted',
        defaultMessage: 'The deal has been completed',
    },
    rateACustomer: {
        id: 'DealCompletedModal_rateACustomer',
        defaultMessage: 'Rate a customer/traveller',
    },
    leaveFeedback: {
        id: 'DealCompletedModal_leaveFeedback',
        defaultMessage: 'Leave a feedback',
    },
    cancel: {
        id: 'DealCompletedModal_cancel',
        defaultMessage: 'Cancel',
    },
    send: {
        id: 'DealCompletedModal_send',
        defaultMessage: 'Send',
    },
    yes: {
        id: 'DealCompletedModal_yes',
        defaultMessage: 'Yes',
    },
    description: {
        id: 'DealCompletedModal_description',
        defaultMessage: 'Description',
    },
});

const DealCompletedModal: FC<DealCompletedModalProps> = ({setIsDealApproved}) => {
    const intl = useIntl();
    const location = useLocation();

    const classes = useStyles();
    const dispatch = useDispatch();

    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className={classes.container}>
                    <h2 className={classes.heading}>
                        <LocalizedText label={localized.dealCompleted} />
                    </h2>
                    <div className={classes.textMd}>
                        <LocalizedText label={localized.rateACustomer} />
                    </div>
                    <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        sx={theme => ({
                            color: theme.palette.primary.main,
                            marginTop: '18px',
                        })}
                    />
                    <div className={classes.textMd}>
                        <LocalizedText label={localized.leaveFeedback} />
                    </div>
                    <FormControl
                        sx={{
                            marginTop: 2,
                            '& .MuiInputBase-root': {
                                borderColor: '#0000003B',
                            },
                            '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0000003B',
                            },
                            '& .MuiInputLabel-formControl': {
                                fontFamily: 'OpenReg',
                                color: '#303030',
                                '&.Mui-focused': {
                                    color: '#303030',
                                },
                            },
                        }}
                        fullWidth
                    >
                        <TextField
                            label={<LocalizedText label={localized.description} />}
                            multiline
                            placeholder={intl.formatMessage({
                                id: 'typeHere',
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
                                '& textarea:focus': {
                                    boxShadow: 'none',
                                    borderColor: '#0000003B',
                                },
                                '& fieldset': {
                                    borderColor: '#0000003B',
                                },
                            }}
                        />
                    </FormControl>
                    <div className={classes.buttonGroup}>
                        <CustomButton closeModal={closeModal} width="88px" bgcolor="white" color="#A9A9A9" borderColor="#A9A9A9">
                            <LocalizedText label={localized.cancel} />
                        </CustomButton>
                        <CustomButton closeModal={closeModal} width="88px" bgcolor="#15C370" color="#fff" borderColor="transparent">
                            <LocalizedText label={localized.send} />
                        </CustomButton>
                    </div>
                </div>
            </ModalContent>
        ),
            true;
    };

    return (
        <Button
            variant="contained"
            sx={theme => ({
                zIndex: 5,
                backgroundColor: theme.palette.primary.main,
                fontFamily: 'OpenReg',
                fontSize: 16,
                transitionDuration: '500ms',
                borderRadius: '20px',
                height: '40px',
                padding: '0 30px',
                textTransform: 'capitalize',
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    opacity: 0.8,
                },
            })}
            onClick={() => {
                setIsDealApproved(true);
                dispatch(setDealUpdate(true));
                handleOpenModal();
            }}
        >
            <LocalizedText label={localized.yes} />
        </Button>
    );
};

export default DealCompletedModal;
