import {FC, useState} from 'react';
import {IoEyeOffOutline, IoEyeOutline} from 'react-icons/io5';
import {Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import CustomButton from '@components/Button';

import LocalizedText from '@components/localize/LocalizedText';

import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        minWidth: '360px',
        [theme.breakpoints.up(620)]: {
            width: '35%',
        },
    },
    headerText: {
        marginTop: theme.spacing(2),
        display: 'block',
        textAlign: 'left',
        fontSize: '32px',
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        [theme.breakpoints.up(620)]: {
            display: 'none',
        },
    },
    descriptionText: {
        color: theme.palette.text.secondary,
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: theme.spacing(2),
        fontSize: '1rem',
        [theme.breakpoints.up(620)]: {
            marginBottom: theme.spacing(0),
        },
        [theme.breakpoints.up(620)]: {
            marginBottom: theme.spacing(2),
        },
    },
    formContainer: {
        minWidth: '360px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        [theme.breakpoints.up(620)]: {
            width: '360px',
        },
    },
}));

const Password: FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(show => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.headerText}>
                <LocalizedText label={{id: 'password'}} />
            </div>
            <p className={classes.descriptionText}>
                <LocalizedText label={{id: 'change'}} labelParams={{prop: 'password'}} />
            </p>
            <div className={classes.formContainer}>
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
                        <LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'Old'}} />
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
                        label={<LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'Old'}} />}
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
                        <LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'New'}} />
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
                        label={<LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'New'}} />}
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
                        <LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'Confirm new'}} />
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
                        label={<LocalizedText label={{id: 'passwordType'}} labelParams={{type: 'Confirm new'}} />}
                    />
                </FormControl>

                <div className="self-end">
                    <CustomButton closeModal={() => {}} width="110px" bgcolor="#15C370" color="#fff" borderColor="transparent">
                        <LocalizedText label={{id: 'save'}} />
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Password;
