import {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {useIntl} from 'react-intl';
import {FormControl, MenuItem, SelectChangeEvent, TextField} from '@mui/material';

import {Select} from '@components/select/Select';

import {IoMdCloseCircleOutline} from 'react-icons/io';

import LocalizedText from '@components/localize/LocalizedText';
import {defineMessages} from 'react-intl';

import {ModalContext} from '@components/modal/ModalProvider';
import {ModalContent} from '@components/modal/ModalContent';
import CustomButton from '@components/Button';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

interface TerminationModalProps {
    isTerminated: boolean;
    setIsTerminated: Dispatch<SetStateAction<boolean>>;
}

const reasons = [
    {
        label: 'Changed my mind',
        value: 'changedMyMind',
    },
    {
        label: 'Problem with another party',
        value: 'party',
    },
    {
        label: 'Agreement issues',
        value: 'agreementIssue',
    },
    {
        label: 'Payment issues',
        value: 'paymentIssue',
    },
    {
        label: 'Found an alternative service',
        value: 'alternative',
    },
    {
        label: 'Other',
        value: 'other',
    },
];

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        padding: '2rem',
        maxWidth: '514px',
        zIndex: 20,
    },
    title: {
        fontSize: '32px',
        color: theme.palette.text.primary, // Replace with the exact value of textColor
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
    },
    text: {
        marginTop: '1.5rem',
        fontSize: '1rem', // Replace with the exact value of text-default
        color: theme.palette.text.secondary,
        fontFamily: 'Lato, sans-serif',
        fontWeight: 400, // Replace with the exact value of font-normal
    },
    link: {
        color: theme.custom.palette.newColors.lightBlue,
        textDecoration: 'underline',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.85,
            transition: 'opacity 0.1s',
        },
    },
    buttonContainer: {
        marginTop: '1.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '0.5rem',
        width: '100%',
    },
    alertBox: {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.error.main,
        fontSize: '1rem',
        padding: '16px 24px',
        fontFamily: 'Open Sans, sans-serif',
        gap: '0.5rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        '&:hover': {
            opacity: 0.8,
        },
    },
}));

const localized = defineMessages({
    areYouSureDeal: {
        id: 'TerminationModal_areYouSureDeal',
        defaultMessage: 'Are you sure that you want to terminate your deal?',
    },
    paymentIssue: {
        id: 'TerminationModal_paymentIssue',
        defaultMessage: 'Payment issues',
    },
    agreementIssue: {
        id: 'TerminationModal_agreementIssue',
        defaultMessage: 'Agreement issues',
    },
    alternative: {
        id: 'TerminationModal_alternative',
        defaultMessage: 'Found an alternative service',
    },
    changedMyMind: {
        id: 'TerminationModal_changedMyMind',
        defaultMessage: 'Changed my mind',
    },
    other: {
        id: 'TerminationModal_other',
        defaultMessage: 'Other',
    },
    reason: {
        id: 'TerminationModal_reason',
        defaultMessage: 'Reason',
    },
    leaveReason: {
        id: 'TerminationModal_leaveReason',
        defaultMessage: 'Leave your reason',
    },
    byClicking: {
        id: 'TerminationModal_byClicking',
        defaultMessage: 'By clicking Terminate, you confirm that you have read, consent and agree to our',
    },
    cancellation: {
        id: 'TerminationModal_cancellation',
        defaultMessage: 'Cancellation policy',
    },
    and: {
        id: 'TerminationModal_and',
        defaultMessage: 'and',
    },
    terminate: {
        id: 'TerminationModal_terminate',
        defaultMessage: 'Terminate',
    },
    cancel: {
        id: 'TerminationModal_cancel',
        defaultMessage: 'Cancel',
    },
    terms: {
        id: 'TerminationModal_terms',
        defaultMessage: 'Terms and Conditions',
    },
    terminateDeal: {
        id: 'TerminationModal_editTheOffer',
        defaultMessage: 'Terminate the deal',
    },
});

const TerminationModal: FC<TerminationModalProps> = ({setIsTerminated, isTerminated}) => {
    const [reason, setReason] = useState<string>('');
    const [isReasonSelected, setIsReasonSelected] = useState(false);

    const {openModal, closeModal} = useContext(ModalContext);

    const intl = useIntl();

    const classes = useStyles();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setReason(event.target.value);
        setIsReasonSelected(true);
    };

    const handleOpenModal = () => {
        openModal(
            <ModalContent>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <LocalizedText label={localized.areYouSureDeal} />
                    </div>
                    <div className={classes.formContainer}>
                        <FormControl
                            sx={{
                                marginTop: 2,
                                root: {
                                    '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                        {
                                            borderColor: '#0000003B',
                                        },

                                    '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                        borderColor: '#0000003B',
                                    },
                                },
                            }}
                            fullWidth
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                label="Reason"
                                id="demo-simple-select"
                                value={reason}
                                options={reasons}
                            >
                                {reasons.map(r => {
                                    return (
                                        <MenuItem key={r.label} value={r.value}>
                                            <LocalizedText label={localized[r.value as keyof typeof localized]} />
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                        <FormControl
                            fullWidth
                            sx={{
                                height: isReasonSelected ? 'auto' : 0,
                                overflowY: 'hidden',
                                transition: 'all 0.6s',
                            }}
                        >
                            <TextField placeholder={intl.formatMessage(localized.leaveReason)} />
                        </FormControl>
                    </div>

                    <p className={classes.text}>
                        <LocalizedText
                            label={{
                                id: 'byClicking',
                            }}
                        />
                        <span className={classes.link}>
                            <LocalizedText label={localized.terms} />
                        </span>{' '}
                        <LocalizedText label={localized.and} />{' '}
                        <span className={classes.link}>
                            <LocalizedText label={localized.cancellation} />
                        </span>
                        .
                    </p>

                    <div className={classes.buttonContainer}>
                        <CustomButton closeModal={closeModal} width="auto" bgcolor="#E2542C" color="#fff" borderColor="transparent">
                            <LocalizedText label={localized.terminate} />
                        </CustomButton>
                        <CustomButton closeModal={closeModal} width="88px" bgcolor="white" color="#A9A9A9" borderColor="#A9A9A9">
                            <LocalizedText label={localized.cancel} />
                        </CustomButton>
                    </div>
                </div>
            </ModalContent>
        );
    };

    return (
        <div onClick={handleOpenModal} className={classes.alertBox}>
            <IoMdCloseCircleOutline />
            <LocalizedText label={localized.terminateDeal} />
        </div>
    );
};

export default TerminationModal;
