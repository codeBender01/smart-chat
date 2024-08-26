import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {FormControl, FormHelperText} from '@mui/material';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    formControlError: {},
    formControlInput: {
        height: theme.custom.formInputHeight,
    },
}));

type BaseFormInputProps<T> = {
    value: T;
    onChange: (...props: unknown[]) => void;
};

type FormControlInputProps<TValue> = BaseFormInputProps<TValue> & {
    // label?: string | MessageDescriptor;
    fieldState: ControllerFieldState;
};

export function withFormControl<TProps, TValue>(WrappedComponent: React.FC<BaseFormInputProps<TValue> & TProps>) {
    return function FormControlInput({
        value,
        fieldState,
        onChange,
        InputProps,
        ...otherProps
    }: FormControlInputProps<TValue> & Pick<TextFieldProps, 'InputProps'> & TProps) {
        const hasError = !!fieldState?.error?.message?.length;
        const classes = useStyles();
        return (
            <FormControl error={hasError}>
                {/*{label ? (*/}
                {/*    <FormLabel focused={false}>*/}
                {/*        <LocalizedText label={label} />*/}
                {/*    </FormLabel>*/}
                {/*) : null}*/}
                <WrappedComponent value={value} onChange={onChange} {...(otherProps as TProps)} />
                {hasError ? <FormHelperText className={classes.formControlError}>{fieldState?.error?.message}</FormHelperText> : null}
            </FormControl>
        );
    };
}
