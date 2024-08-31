import {FC, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, SelectChangeEvent} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {Select} from '@components/select/Select';

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

    return (
        <div className="w-[100%] min-w-[360px] md:w-[35%]">
            <div className="mt-8 md:hidden block text-xl text-textColor font-boldQuick">
                <LocalizedText label={{id: 'currency', defaultMessage: 'Currency'}} />
            </div>
            <p className="text-lineGray font-mainSans mb-8 text-default md:mb-0">
                <LocalizedText label={{id: 'change', defaultMessage: 'You can change your currency'}} labelParams={{prop: 'currency'}} />
            </p>
            <div className="flex flex-col gap-4 min-w-[360px] md:w-[360px] w-[100%] mt-4">
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
                <Button
                    variant={'contained'}
                    disableElevation
                    disableRipple
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

export default Currency;
