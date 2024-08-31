import {FC, useState} from 'react';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

const Password: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                <LocalizedText label={{id: 'password', defaultMessage: 'Password'}} />
            </div>
            <p className="text-lineGray font-mainSans mb-8 text-default tablet:mb-6">
                <LocalizedText label={{id: 'change', defaultMessage: 'You can change your {prop}'}} labelParams={{prop: 'password'}} />
            </p>

            <div className="min-w-[360px] md:w-[360px] w-[100%] flex flex-col gap-4">
                <FormControl
                    sx={{
                        margin: 0,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B !important',
                        },
                    }}
                    variant="outlined"
                >
                    <InputLabel
                        sx={{
                            fontFamily: 'OpenReg',
                            color: '#303030',

                            '&.Mui-focused': {
                                color: '#303030',
                            },
                        }}
                        htmlFor="outlined-adornment-password"
                    >
                        <LocalizedText label={{id: 'passwordType', defaultMessage: '{type} password'}} labelParams={{type: 'Old'}} />
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            minWidth: '360px',
                            fontFamily: 'OpenReg',
                            width: '100%',
                            '& .MuiInputBase-input:focus': {
                                boxShadow: 'none',
                            },
                        }}
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
                <FormControl
                    sx={{
                        margin: 0,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B !important',
                        },
                    }}
                    variant="outlined"
                >
                    <InputLabel
                        sx={{
                            fontFamily: 'OpenReg',
                            color: '#303030',

                            '&.Mui-focused': {
                                color: '#303030',
                            },
                        }}
                        htmlFor="outlined-adornment-password"
                    >
                        <LocalizedText label={{id: 'passwordType', defaultMessage: '{type} password'}} labelParams={{type: 'New'}} />
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            minWidth: '360px',
                            fontFamily: 'OpenReg',
                            width: '100%',
                            '& .MuiInputBase-input:focus': {
                                boxShadow: 'none',
                            },
                        }}
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
                <FormControl
                    sx={{
                        margin: 0,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },

                        '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                            borderColor: '#0000003B !important',
                        },
                    }}
                    variant="outlined"
                >
                    <InputLabel
                        sx={{
                            fontFamily: 'OpenReg',
                            color: '#303030',

                            '&.Mui-focused': {
                                color: '#303030',
                            },
                        }}
                        htmlFor="outlined-adornment-password"
                    >
                        <LocalizedText
                            label={{id: 'passwordType', defaultMessage: '{type} password'}}
                            labelParams={{type: 'Confirm new'}}
                        />
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            minWidth: '360px',
                            fontFamily: 'OpenReg',
                            width: '100%',
                            '& .MuiInputBase-input:focus': {
                                boxShadow: 'none',
                            },
                        }}
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
                    disableElevation
                    disableRipple
                    variant="contained"
                    sx={{
                        bgcolor: '#15C370',
                        color: '#fff',
                        width: '110px',
                        alignSelf: 'flex-end',
                        borderRadius: '20px',
                        textTransform: 'none',
                        fontFamily: 'OpenReg',
                        '&:hover': {
                            bgcolor: '#15C370',
                            opacity: 0.8,
                        },
                    }}
                >
                    <LocalizedText label={{id: 'save', defaultMessage: 'Save'}} />
                </Button>
            </div>
        </div>
    );
};

export default Password;
