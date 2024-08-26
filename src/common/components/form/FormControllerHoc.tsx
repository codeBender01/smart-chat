import React from 'react';
import {Controller, Path, PathValue, useFormContext} from 'react-hook-form';
import {RegisterOptions} from 'react-hook-form/dist/types/validator';

import {BaseFormInputComponentProps} from '@components/form/base';

type FormControllerHocItemProps<TModel extends object> = {
    defaultValue?: PathValue<TModel, Path<TModel>>;
    fieldKey: Path<TModel>;
    rules?: Omit<RegisterOptions<TModel, Path<TModel>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
};

export function withFormController<TModel extends object, TProps extends object = {}>(
    WrappedComponent: React.FC<BaseFormInputComponentProps<TModel> & TProps>
) {
    return function FormController({fieldKey, defaultValue, rules, ...props}: FormControllerHocItemProps<TModel> & TProps) {
        const {control} = useFormContext<TModel>();
        return (
            <Controller
                render={({field, fieldState}) => (
                    <WrappedComponent value={field.value} fieldState={fieldState} onChange={field.onChange} {...(props as TProps)} />
                )}
                defaultValue={defaultValue}
                name={fieldKey}
                control={control}
                rules={rules}
            />
        );
    };
}
