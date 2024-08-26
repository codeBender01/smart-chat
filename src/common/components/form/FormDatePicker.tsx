import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {useFormFieldState} from '@hooks/form/useFormFieldState';
import {LocalizationProvider, MobileDatePicker, MobileDatePickerProps} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

export type FormDatePickerProps<TDate> = MobileDatePickerProps<TDate> &
    React.RefAttributes<HTMLDivElement> & {
        fieldState: ControllerFieldState;
    };

function FormDatePicker<TDate>({fieldState, slotProps, ...props}: FormDatePickerProps<TDate>) {
    const {hasError, errorMessage} = useFormFieldState(fieldState);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
                slotProps={{
                    ...slotProps,
                    textField: {error: hasError, helperText: errorMessage, ...(slotProps?.textField ?? {})},
                }}
                {...props}
            />
        </LocalizationProvider>
    );
}

export default FormDatePicker;
