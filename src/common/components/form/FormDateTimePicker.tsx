import React from 'react';
import {ControllerFieldState} from 'react-hook-form';
import {useFormFieldState} from '@hooks/form/useFormFieldState';
import {LocalizationProvider, MobileDateTimePicker} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {MobileDateTimePickerProps} from '@mui/x-date-pickers/MobileDateTimePicker/MobileDateTimePicker.types';

type FormDateTimePicker<TDate> = MobileDateTimePickerProps<TDate> &
    React.RefAttributes<HTMLDivElement> & {
        fieldState: ControllerFieldState;
    };

function FormDateTimePicker<TDate>({fieldState, slotProps, ...props}: FormDateTimePicker<TDate>) {
    const {hasError, errorMessage} = useFormFieldState(fieldState);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
                ampm={false}
                slotProps={{
                    ...slotProps,
                    textField: {error: hasError, helperText: errorMessage, ...(slotProps?.textField ?? {})},
                }}
                {...props}
            />
        </LocalizationProvider>
    );
}

export default FormDateTimePicker;
