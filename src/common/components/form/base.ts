import {ControllerFieldState, Path, PathValue} from 'react-hook-form';

export type BaseFormInputComponentProps<TModel> = {
    value: PathValue<TModel, Path<TModel>>;
    fieldState: ControllerFieldState;
    onChange: () => void;
};
