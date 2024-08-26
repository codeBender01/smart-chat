import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {useFormFieldState} from '@hooks/form/useFormFieldState';
import {TextField} from '@mui/material';
import {TextFieldProps} from '@mui/material/TextField/TextField';

type FormInputProps = TextFieldProps & {
    fieldState: ControllerFieldState;
};

function FormInput({fieldState, ...otherProps}: FormInputProps) {
    const {hasError, errorMessage} = useFormFieldState(fieldState);
    return <TextField error={hasError} helperText={errorMessage} {...otherProps} />;
}

export default FormInput;
