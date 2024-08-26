import {FC, useState} from 'react';
import {Button, createTheme, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ThemeProvider} from '@mui/material';

const reasons = [
    {
        label: 'English',
        value: 'English',
    },
    {
        label: 'Belarusian',
        value: 'Belarusian',
    },
    {
        label: 'Polish',
        value: 'Polish',
    },
    {
        label: 'Ukranian',
        value: 'Ukranian',
    },
];

const Language: FC = () => {
    const [language, setLanguage] = useState('English');

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
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
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">Language</div>
            <p className="text-lineGray font-mainSans mb-8 text-default min-[620px]:mb-8">You can change your language</p>
            <div className="min-w-[360px] md:w-[360px] w-[100%] flex flex-col gap-4">
                <ThemeProvider theme={selectTheme}>
                    <FormControl
                        sx={{
                            marginTop: 2,
                        }}
                        fullWidth
                    >
                        <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            label="Language"
                            id="demo-simple-select"
                            value={language}
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

export default Language;
