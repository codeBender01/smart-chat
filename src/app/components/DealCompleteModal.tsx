import {FC, SetStateAction, useContext, Dispatch} from 'react';
import {Button, createTheme, FormControl, Rating, TextField, ThemeProvider} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {useIntl} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

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

const DealCompletedModal: FC<DealCompletedModalProps> = ({setIsDealApproved}) => {
    const intl = useIntl();

    const classes = useStyles();

    const {openModal, closeModal} = useContext(ModalContext);

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className={classes.container}>
                    <h2 className={classes.heading}>
                        <LocalizedText label={{id: 'dealCompleted', defaultMessage: 'The deal has been completed'}} />
                    </h2>
                    <div className={classes.textMd}>
                        <LocalizedText label={{id: 'rateACustomer', defaultMessage: 'Rate a customer/traveller'}} />
                    </div>
                    <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        sx={{
                            color: '#15C370',
                            marginTop: '18px',
                        }}
                    />
                    <div className={classes.textMd}>
                        <LocalizedText label={{id: 'leaveFeedback', defaultMessage: 'Leave feedback'}} />
                    </div>
                    <FormControl
                        sx={{
                            marginTop: 2,
                            '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                {
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
                            <LocalizedText label={{id: 'cancel', defaultMessage: 'Cancel'}} />
                        </CustomButton>
                        <CustomButton closeModal={closeModal} width="88px" bgcolor="#15C370" color="#fff" borderColor="transparent">
                            <LocalizedText label={{id: 'send', defaultMessage: 'Send'}} />
                        </CustomButton>
                    </div>
                </div>
            </ModalContent>
        ),
            true;
    };

    console.log('fuck');

    return (
        <Button
            variant="contained"
            sx={{
                zIndex: 5,
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
