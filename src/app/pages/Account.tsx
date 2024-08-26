import {FC, useState} from 'react';
import TerminationApproveModal from '@app/components/TerminationApproveModal';
import {Button, createTheme, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, ThemeProvider} from '@mui/material';

const reasons = [
    {
        label: 'No longer needed',
        value: 'No longer needed',
    },
    {
        label: 'Found a better alternative',
        value: 'Found a better alternative',
    },
    {
        label: 'Doesn’t meet my expectations',
        value: 'Doesn’t meet my expectations',
    },
    {
        label: 'Too many emails and notifications',
        value: 'Too many emails and notifications',
    },
    {
        label: 'Unsatisfactory user support',
        value: 'Unsatisfactory user support',
    },
    {
        label: 'Bad user experience',
        value: 'Bad user experience',
    },
    {
        label: 'Technical issues',
        value: 'Technical issues',
    },
    {
        label: 'Personal issues',
        value: 'Personal issues',
    },
    {
        label: 'Other',
        value: 'Other',
    },
];

const Account: FC = () => {
    const [reason, setReason] = useState('');
    const [isReasonSelected, setIsReasonSelected] = useState(false);
    const [isTerminate, setIsTerminate] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
        setIsReasonSelected(true);
    };

    const selectTheme = createTheme({
        components: {
            MuiSelect: {
                styleOverrides: {
                    root: {
                        padding: '0 12px',
                        '& input': {
                            backgroundColor: 'red',
                        },
                    },
                },
            },

            MuiList: {
                styleOverrides: {
                    root: {
                        maxHeight: '400px',
                    },
                },
            },

            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B',
                        },
                    },
                },
            },

            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        padding: '16px 24px',
                    },
                },
            },

            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        fontFamily: 'OpenReg',
                        color: '#303030',

                        '&.Mui-focused': {
                            color: '#303030',
                        },
                    },
                },
            },
            MuiButton: {
                defaultProps: {
                    variant: 'outlined',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                        backgroundColor: 'transparent',
                        borderColor: '#E2542C',
                        borderWidth: '1px',
                        color: '#E2542C',
                    },
                },
            },
        },
    });

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">Account</div>
            <p className="text-lineGray font-mainSans mb-8 text-default min-[620px]:mb-8">
                If you need to deactivate an account and you’re prompted to provide a reason
            </p>
            <div className="flex flex-col gap-4 min-w-[360px] md:w-[360px] w-[100%] mt-4">
                <ThemeProvider theme={selectTheme}>
                    <FormControl
                        sx={{
                            marginTop: 2,
                        }}
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Reason"
                            id="demo-simple-select"
                            value={reason}
                            onChange={handleChange}
                        >
                            {reasons.map(r => {
                                return (
                                    <MenuItem key={r.label} value={r.value}>
                                        {r.label}
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
                        <TextField placeholder="Leave your reason" />
                    </FormControl>
                    <Button
                        sx={{
                            width: '120px',
                            alignSelf: 'flex-end',
                            '&:hover': {
                                bgcolor: '#E2542C',
                                opacity: 0.8,
                                color: '#fff',
                                borderColor: '#E2542C',
                            },
                        }}
                        onClick={() => setIsTerminate(true)}
                    >
                        Deactivate
                    </Button>
                </ThemeProvider>

                <TerminationApproveModal open={isTerminate} setOpen={setIsTerminate} />
            </div>
        </div>
    );
};

export default Account;
