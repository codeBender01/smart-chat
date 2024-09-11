import {FC, useState} from 'react';
import TerminationApproveModal from '@app/components/TerminationApproveModal';
import {FormControl, MenuItem, SelectChangeEvent, TextField} from '@mui/material';
import {defineMessages, useIntl} from 'react-intl';

import {Select} from '@components/select/Select';

import LocalizedText from '@components/localize/LocalizedText';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const reasons = [
    {
        label: 'No longer needed',
        value: 'noLonger',
    },
    {
        label: 'Found a better alternative',
        value: 'foundBetter',
    },
    {
        label: 'Doesn’t meet my expectations',
        value: 'doesntMeet',
    },
    {
        label: 'Too many emails and notifications',
        value: 'tooMany',
    },
    {
        label: 'Unsatisfactory user support',
        value: 'unsatisfactory',
    },
    {
        label: 'Bad user experience',
        value: 'badUSer',
    },
    {
        label: 'Technical issues',
        value: 'technical',
    },
    {
        label: 'Personal issues',
        value: 'personal',
    },
    {
        label: 'Other',
        value: 'other',
    },
];

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        minWidth: '360px',
        '@media (min-width: 768px)': {
            width: '35%',
        },
    },
    accountText: {
        marginTop: '32px',
        fontSize: '1.25rem',
        color: theme.custom.palette.newColors.headerIconBorder, // Replace with the value of textColor
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        '@media (min-width: 768px)': {
            display: 'none',
        },
        display: 'block',
    },
    descriptionText: {
        color: theme.custom.palette.newColors.grayDot, // Replace with the value of lineGray
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: '32px',
        fontSize: '1rem', // Replace with the value of text-default
        '@media (min-width: 620px)': {
            marginBottom: '32px',
        },
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        minWidth: '360px',
        width: '100%',
        marginTop: '16px',
        '@media (min-width: 768px)': {
            width: '360px',
        },
    },
}));

const localized = defineMessages({
    account: {
        id: 'Account_account',
        defaultMessage: 'Account',
    },
    ifYouNeed: {
        id: 'Account_ifYouNeed',
        defaultMessage: 'If you need to deactivate an account and you’re prompted to provide a reason',
    },
    personal: {
        id: 'Account_personal',
        defaultMessage: 'Personal issues',
    },
    technical: {
        id: 'Account_technical',
        defaultMessage: 'Technical issues',
    },
    noLonger: {
        id: 'Account_noLonger',
        defaultMessage: 'No longer needed',
    },
    foundBetter: {
        id: 'Account_foundBetter',
        defaultMessage: 'Found a better alternative',
    },
    doesntMeet: {
        id: 'Account_doesntMeet',
        defaultMessage: 'Doesn’t meet my expectations',
    },
    tooMany: {
        id: 'Account_tooMany',
        defaultMessage: 'Too many emails and notifications',
    },
    unsatisfactory: {
        id: 'Account_unsatisfactory',
        defaultMessage: 'Unsatisfactory user support',
    },
    badUser: {
        id: 'Account_badUser',
        defaultMessage: 'Bad user experience',
    },
    leaveReason: {
        id: 'Account_leaveReason',
        defaultMessage: 'Leave your reason',
    },
});

const Account: FC = () => {
    const [reason, setReason] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const intl = useIntl();

    const classes = useStyles();

    const handleChange = (event: SelectChangeEvent<string | string[]>) => {
        setReason(event.target.value as string);
        setIsDisabled(false);
    };

    return (
        <div className={classes.container}>
            <div className={classes.accountText}>
                <LocalizedText label={{id: 'account'}} />
            </div>
            <p className={classes.descriptionText}>
                <LocalizedText
                    label={{
                        id: 'ifYouNeed',
                    }}
                />
            </p>
            <div className={classes.formContainer}>
                <FormControl
                    sx={{
                        marginTop: 2,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important ',
                            },
                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B !important ',
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
                        onChange={handleChange}
                        sx={{
                            padding: '0 12px',
                            '& .Mui-List': {
                                maxHeight: '400px',
                            },

                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0000003B',
                            },
                        }}
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
                        height: reason === 'other' ? 'auto' : 0,
                        overflowY: 'hidden',
                        transition: 'all 0.6s',
                    }}
                >
                    <TextField placeholder={intl.formatMessage(localized.leaveReason)} />
                </FormControl>
                <TerminationApproveModal disabled={isDisabled} />
            </div>
        </div>
    );
};

export default Account;
