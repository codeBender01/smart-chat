import {ControllerFieldState} from 'react-hook-form';

type UseFormFieldStateResult = {
    hasError: boolean;
    errorMessage: string | undefined;
};

export function useFormFieldState(fieldState: ControllerFieldState): UseFormFieldStateResult {
    return {hasError: !!fieldState?.error?.message?.length, errorMessage: fieldState?.error?.message};
}
