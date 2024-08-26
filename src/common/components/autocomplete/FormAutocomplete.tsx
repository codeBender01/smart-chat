import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {useFormFieldState} from '@hooks/form/useFormFieldState';

import {Autocomplete, AutocompleteProps} from '@components/autocomplete/Autocomplete';
import {FormErrorText} from '@components/form/FormErrorText';
import {SelectOption} from '@components/select/Select';

type FormAutocompleteProps = Omit<AutocompleteProps, 'onChange'> & {
    fieldState: ControllerFieldState;
    onChange: (value: any) => void;
};

export function FormAutocomplete({fieldState, onChange, ...props}: FormAutocompleteProps) {
    const {hasError, errorMessage} = useFormFieldState(fieldState);
    return (
        <div>
            <Autocomplete
                onChange={(_, value: SelectOption | SelectOption[]) => {
                    if (onChange) {
                        onChange(Array.isArray(value) ? value.map(v => v.value) : value);
                    }
                }}
                {...props}
            />
            {hasError ? <FormErrorText text={errorMessage} /> : null}
        </div>
    );
}
