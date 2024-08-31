import {FC, useState} from 'react';
import TerminationApproveModal from '@app/components/TerminationApproveModal';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material';
import {useIntl} from 'react-intl';

import LocalizedText from '@components/localize/LocalizedText';

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

const Account: FC = () => {
    const [reason, setReason] = useState('');
    const [isReasonSelected, setIsReasonSelected] = useState(false);
    const [isTerminate, setIsTerminate] = useState(false);

    const intl = useIntl();

    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
        setIsReasonSelected(true);
    };

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                <LocalizedText label={{id: 'account', defaultMessage: 'Account'}} />
            </div>
            <p className="text-lineGray font-mainSans mb-8 text-default min-[620px]:mb-8">
                <LocalizedText
                    label={{
                        id: 'ifYouNeed',
                        defaultMessage: 'If you need to deactivate an account and you’re prompted to provide a reason',
                    }}
                />
            </p>
            <div className="flex flex-col gap-4 min-w-[360px] md:w-[360px] w-[100%] mt-4">
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
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            fontFamily: 'OpenReg',
                            color: '#303030',

                            '&.Mui-focused': {
                                color: '#303030',
                            },
                        }}
                    >
                        <LocalizedText label={{id: 'reason', defaultMessage: 'Reason'}} />
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="Reason"
                        id="demo-simple-select"
                        value={reason}
                        onChange={handleChange}
                        sx={{
                            padding: '0 12px',
                            '& .Mui-List': {
                                maxHeight: '400px',
                            },
                            '& input': {
                                backgroundColor: 'red',
                            },

                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0000003B',
                            },
                        }}
                    >
                        {reasons.map(r => {
                            return (
                                <MenuItem key={r.label} value={r.value}>
                                    <LocalizedText label={{id: r.value, defaultMessage: r.label}} />
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
                    <TextField placeholder={intl.formatMessage({id: 'leaveReason'})} />
                </FormControl>
                <TerminationApproveModal />
            </div>
        </div>
    );
};

export default Account;
