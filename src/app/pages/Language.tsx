import {FC, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Button, FormControl, SelectChangeEvent} from '@mui/material';
import {setLang} from '@store/languageSlice';

import LocalizedText from '@components/localize/LocalizedText';
import {Select} from '@components/select/Select';

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
                    ></Select>
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
