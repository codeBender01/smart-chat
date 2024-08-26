import React from 'react';
import {MessageDescriptor, useIntl} from 'react-intl';
import {
    Autocomplete as MuiAutocomplete,
    AutocompleteGetTagProps,
    AutocompleteProps as MuiAutocompleteProps,
    AutocompleteRenderGetTagProps,
    Chip,
    TextField,
} from '@mui/material';

import LocalizedText from '@components/localize/LocalizedText';
import {SelectOption} from '@components/select/Select';

export type AutocompleteProps = Omit<MuiAutocompleteProps<any, any, any, any>, 'renderInput'> & {
    options: SelectOption[];
    label: React.ReactNode;
    error?: boolean;
};

export function Autocomplete({options, label, value, error, ...props}: AutocompleteProps) {
    const {formatMessage} = useIntl();

    function renderTags(values: string[], getTagProps: AutocompleteRenderGetTagProps) {
        return values.map((option, index: number) => (
            <Chip variant="outlined" label={<LocalizedText label={option} />} {...getTagProps({index})} />
        ));
    }

    return (
        <MuiAutocomplete
            renderInput={params => <TextField error={error} {...params} label={label} />}
            options={options}
            getOptionLabel={option => (option?.label ? formatMessage(option?.label) : option)}
            renderTags={props.multiple ? renderTags : undefined}
            value={props.multiple ? value ?? [] : value}
            {...props}
        />
    );
}
