import {FC, useState} from 'react';

import {FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput, createTheme, ThemeProvider, Button} from '@mui/material';

import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';

const Password: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const passwordInputTheme = createTheme({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        minWidth: '360px',
                        fontFamily: 'OpenReg',
                        width: '100%',
                        '& .MuiInputBase-input:focus': {
                            boxShadow: 'none',
                        },
                    },
                },
            },

            MuiFormControl: {
                styleOverrides: {
                    root: {
                        margin: 0,
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
            <ThemeProvider theme={passwordInputTheme}>
                <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick ">Password</div>
                <p className="text-lineGray font-mainSans mb-8 text-default tablet:mb-6">You can change your password</p>

                <div className="min-w-[360px] md:w-[360px] w-[100%] flex flex-col gap-4">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Old password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Old password"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">New password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="New password"
                        />
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm new password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Confirm new password"
                        />
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
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Password;