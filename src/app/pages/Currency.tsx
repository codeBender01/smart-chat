import {FC, useState} from 'react';

import {FormControl, Select, MenuItem, InputLabel, SelectChangeEvent, ThemeProvider, createTheme, Button} from '@mui/material';

const reasons = [
    {
        label: 'EUR',
        value: 'EUR',
    },
    {
        label: 'USD',
        value: 'USD',
    },
    {
        label: 'PLN',
        value: 'PLN',
    },
    {
        label: 'BYN',
        value: 'BYN',
    },
    {
        label: 'UAH',
        value: 'UAH',
    },
];

const Currency: FC = () => {
    const [reason, setReason] = useState('USD');

    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
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

            MuiFormControl: {
                styleOverrides: {
                    root: {
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B !important',
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
                    variant: 'contained',
                    disableElevation: true,
                    disableRipple: true,
                },
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                    },
                },
            },
        },
    });

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">Currency</div>
            <p className="text-lineGray font-mainSans mb-8 text-default md:mb-0">You can change your currency</p>
            <div className="flex flex-col gap-4 min-w-[360px] md:w-[360px] w-[100%] mt-4">
                <ThemeProvider theme={selectTheme}>
                    <FormControl
                        sx={{
                            marginTop: 2,
                        }}
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Currency"
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
                    <Button
                        sx={{
                            bgcolor: '#15C370',
                            color: '#fff',
                            width: '110px',
                            alignSelf: 'flex-end',
                            '&:hover': {
                                bgcolor: '#15C370',
                                opacity: 0.8,
                            },
                        }}
                    >
                        Save
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Currency;
