import {FC, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import LocalizedText from '@components/localize/LocalizedText';

import {setLang} from '@store/languageSlice';

import {useDispatch} from 'react-redux';

import {Locale} from 'src/common/style/theme';

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

const Language: FC = () => {
    const [language, setLanguage] = useState('en');

    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        const newLang = event.target.value as Locale; // Type assertion
        setLanguage(event.target.value as string);
        dispatch(setLang(newLang));
    };

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                <LocalizedText label={{id: 'language', defaultMessage: 'Language'}} />
            </div>
            <p className="text-lineGray font-mainSans mb-8 text-default min-[620px]:mb-8">
                <LocalizedText label={{id: 'change', defaultMessage: 'You can change your {prop}'}} labelParams={{prop: 'language'}} />
            </p>
            <div className="min-w-[360px] md:w-[360px] w-[100%] flex flex-col gap-4">
                <FormControl
                    sx={{
                        marginTop: 2,
                        '& .css-1m5g6k3-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                            {
                                borderColor: '#0000003B !important',
                            },
                    }}
                    fullWidth
                >
                    <InputLabel
                        sx={{
                            fontFamily: 'OpenReg',
                            color: '#303030',

                            '&.Mui-focused': {
                                color: '#303030',
                            },
                        }}
                        id="demo-simple-select-label"
                    >
                        <LocalizedText label={{id: 'language', defaultMessage: 'Language'}} />
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label={<LocalizedText label={{id: 'language', defaultMessage: 'Language'}} />}
                        id="demo-simple-select"
                        value={language}
                        onChange={handleChange}
                        sx={{
                            padding: '0 12px',
                            '& input': {
                                backgroundColor: 'red',
                            },
                        }}
                    >
                        {reasons.map(r => {
                            return (
                                <MenuItem sx={{padding: '16px 24px'}} key={r.label} value={r.value}>
                                    {r.label}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
                <Button
                    disableFocusRipple
                    disableElevation
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

export default Language;
