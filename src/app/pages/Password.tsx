import {FC, useState} from 'react';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import {Button, createTheme, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, ThemeProvider} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

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
                <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                    <LocalizedText label={{id: 'password', defaultMessage: 'Password'}} />
                </div>
                <p className="text-lineGray font-mainSans mb-8 text-default tablet:mb-6">
                    <LocalizedText label={{id: 'change', defaultMessage: 'You can change your {prop}'}} labelParams={{prop: 'password'}} />
                </p>

                <div className="min-w-[360px] md:w-[360px] w-[100%] flex flex-col gap-4">
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">
                            <LocalizedText label={{id: 'passwordType', defaultMessage: '{type} password'}} labelParams={{type: 'Old'}} />
                        </InputLabel>
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
                        <InputLabel htmlFor="outlined-adornment-password">
                            <LocalizedText label={{id: 'passwordType', defaultMessage: '{type} password'}} labelParams={{type: 'New'}} />
                        </InputLabel>
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
                        <InputLabel htmlFor="outlined-adornment-password">
                            <LocalizedText
                                label={{id: 'passwordType', defaultMessage: '{type} password'}}
                                labelParams={{type: 'Confirm new'}}
                            />
                        </InputLabel>
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
                        <LocalizedText label={{id: 'save', defaultMessage: 'Save'}} />
                    </Button>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default Password;
