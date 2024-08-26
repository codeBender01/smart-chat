import React from 'react';
import {MessageDescriptor} from 'react-intl';
import {Box, Chip, FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectProps as MuiSelectProps} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export type SelectOption = {
    value: any;
    label: string | MessageDescriptor;
};

export type SelectProps = MuiSelectProps<string | string[]> & {
    options: SelectOption[];
    valueView?: 'chip' | 'default';
};

export function Select({options, valueView = 'default', value, ...props}: SelectProps) {
    function renderChipValue(values: string | string[]) {
        return (
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                {Array.isArray(values) ? (
                    values?.map(value => <Chip key={value} label={value} />)
                ) : (
                    <Chip key={values} label={values as string} />
                )}
            </Box>
        );
    }

    return options?.length ? (
        <FormControl fullWidth>
            <InputLabel id="simple-select-label" size={props.size === 'medium' ? 'normal' : props.size}>
                {props.label}
            </InputLabel>
            <MuiSelect<string | string[]>
                labelId="simple-select-label"
                renderValue={valueView === 'chip' ? renderChipValue : undefined}
                value={props.multiple ? value ?? [] : value}
                MenuProps={MenuProps}
                {...props}
            >
                {options?.map(option => (
                    <MenuItem key={`select_option_${option.value}`} value={option?.value}>
                        <LocalizedText label={option?.label} />
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    ) : null;
}
