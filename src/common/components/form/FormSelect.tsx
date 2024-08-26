import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {useFormFieldState} from '@hooks/form/useFormFieldState';

import {FormErrorText} from '@components/form/FormErrorText';
import {Select, SelectProps} from '@components/select/Select';

type FormSelectProps = SelectProps & {
    fieldState: ControllerFieldState;
};

function FormSelect({fieldState, ...props}: FormSelectProps) {
    const {hasError, errorMessage} = useFormFieldState(fieldState);
    return (
        <div>
            <Select error={hasError} {...props} />
            {hasError ? <FormErrorText text={errorMessage} /> : null}
        </div>
    );
}

export default FormSelect;
