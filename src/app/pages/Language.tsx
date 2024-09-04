import {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, FormControl, SelectChangeEvent} from '@mui/material';
import {setLang} from '@store/languageSlice';

import LocalizedText from '@components/localize/LocalizedText';
import {Select} from '@components/select/Select';
import CustomButton from '@components/Button';

import {Locale} from 'src/common/style/theme';
import {makeStyles} from '@mui/styles';
import {CustomTheme} from 'src/common/style/theme';

const reasons = [
    {
        label: 'English',
        value: 'en',
    },
    {
        label: 'Belarusian',
        value: 'be-BY',
    },
    {
        label: 'Polish',
        value: 'pl-PL',
    },
    {
        label: 'Ukranian',
        value: 'uk-UA',
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
        marginTop: '32px', // mt-8
        display: 'block',
        fontSize: '32px', // text-xl
        color: theme.palette.text.primary, // textColor
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: '700',
        '@media (min-width: 768px)': {
            // md:hidden
            display: 'none',
        },
    },
    description: {
        color: theme.palette.text.secondary,
        fontFamily: 'Open Sans, sans-serif', // font-mainSans
        marginBottom: '32px', // mb-8
        fontSize: '1rem', // text-default
        '@media (min-width: 620px)': {
            // min-[620px]:mb-8
            marginBottom: '32px',
        },
    },
    formContainer: {
        minWidth: '360px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px', // gap-4
        '@media (min-width: 768px)': {
            // md:w-[360px]
            width: '360px',
        },
    },
}));

const Language: FC = () => {
    const [language, setLanguage] = useState('en');

    const dispatch = useDispatch();
    const classes = useStyles();

    const handleChange = (event: SelectChangeEvent) => {
        const newLang = event.target.value as Locale; // Type assertion
        setLanguage(event.target.value as string);
        dispatch(setLang(newLang));
    };

    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <LocalizedText label={{id: 'language', defaultMessage: 'Language'}} />
            </div>
            <p className={classes.description}>
                <LocalizedText label={{id: 'change', defaultMessage: 'You can change your {prop}'}} labelParams={{prop: 'language'}} />
            </p>
            <div className={classes.formContainer}>
                <FormControl
                    sx={{
                        marginTop: 2,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },
                        '& .css-s8ydqt-MuiButtonBase-root-MuiMenuItem-root': {
                            padding: '16px 24px',
                        },
                    }}
                    fullWidth
                >
                    <Select
                        labelId="demo-simple-select-label"
                        label={<LocalizedText label={{id: 'language', defaultMessage: 'Language'}} />}
                        id="demo-simple-select"
                        value={language}
                        options={reasons}
                        sx={{
                            padding: '0 12px',
                            fontSize: '16px',
                            maxHeight: '400px',
                            '& input': {
                                backgroundColor: 'red',
                            },
                        }}
                    />
                </FormControl>
                <div className="self-end">
                    <CustomButton closeModal={() => {}} width="110px" bgcolor="#15C370" color="#fff" borderColor="transparent">
                        <LocalizedText label={{id: 'save', defaultMessage: 'Save'}} />
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Language;
