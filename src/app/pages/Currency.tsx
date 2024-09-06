import {FC, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, SelectChangeEvent} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {Select} from '@components/select/Select';
import CustomButton from '@components/Button';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

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

const useStyles = makeStyles((theme: CustomTheme) => ({
    container: {
        width: '100%',
        minWidth: '360px',
        '@media (min-width: 768px)': {
            // md:w-[35%]
            width: '35%',
        },
    },
    title: {
        marginTop: '32px',
        display: 'block',
        fontSize: '32px',
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        '@media (min-width: 768px)': {
            display: 'none',
        },
    },
    description: {
        color: theme.palette.text.secondary,
        fontFamily: 'Open Sans, sans-serif',
        marginBottom: '32px',
        fontSize: '1rem',
        '@media (min-width: 768px)': {
            marginBottom: '0px',
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

const Currency: FC = () => {
    const [reason, setReason] = useState('USD');

    const handleChange = (event: SelectChangeEvent) => {
        setReason(event.target.value as string);
    };

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <LocalizedText label={{id: 'currency'}} />
            </div>
            <p className={classes.description}>
                <LocalizedText label={{id: 'change'}} labelParams={{prop: 'currency'}} />
            </p>
            <div className={classes.formContainer}>
                <FormControl
                    sx={{
                        marginTop: 2,
                        root: {
                            '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                                {
                                    borderColor: '#0000003B !important',
                                },

                            '& .MuiOutlinedInput-notchedOutline.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                borderColor: '#0000003B !important',
                            },
                        },
                    }}
                    fullWidth
                >
                    <Select
                        labelId="demo-simple-select-label"
                        label="Currency"
                        id="demo-simple-select"
                        value={reason}
                        options={reasons}
                        sx={{
                            padding: '0 12px',
                            '& input': {
                                backgroundColor: 'red',
                            },
                        }}
                    ></Select>
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

export default Currency;
