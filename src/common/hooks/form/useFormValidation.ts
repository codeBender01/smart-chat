import {defineMessages, MessageDescriptor, useIntl} from 'react-intl';
import dayjs, {Dayjs, ManipulateType} from 'dayjs';

export const positiveNumberRegex = /^\d+([\\,]\d+)*([\\.]\d+)?$/;

const localized = defineMessages({
    dateTimeValidateMessage: {
        id: 'dateTimeValidateMessage',
        defaultMessage: '{field} should be later now + {value} {unit}',
    },
});

const validationRuleLocalized = defineMessages<FormValidationRule>({
    Required: {
        id: 'formValidationMessage_required',
        defaultMessage: '{field} is required',
    },
    PositiveNumber: {
        id: 'formValidationMessage_positiveNumber',
        defaultMessage: '{field} should be positive',
    },
});

export enum FormValidationRule {
    Required = 'Required',
    PositiveNumber = 'PositiveNumber',
}

type UseFormValidationResult = {
    getValidationMessage: (rule: FormValidationRule, filed: string | MessageDescriptor) => string;
    getFutureValidateDateTimeMessage: (
        field: string | MessageDescriptor,
        datetime: Dayjs,
        value: number,
        unit: ManipulateType
    ) => string | undefined;
};

export function useFormValidation(): UseFormValidationResult {
    const {formatMessage} = useIntl();
    function getValidationMessage(rule: FormValidationRule, field: string | MessageDescriptor) {
        return formatMessage(validationRuleLocalized[rule], {field: typeof field === 'string' ? field : formatMessage(field)});
    }

    function getFutureValidateDateTimeMessage(field: string | MessageDescriptor, datetime: Dayjs, value: number, unit: ManipulateType) {
        return datetime < dayjs().add(value, unit)
            ? formatMessage(localized.dateTimeValidateMessage, {
                  field: typeof field === 'string' ? field : formatMessage(field),
                  value,
                  unit,
              })
            : undefined;
    }
    return {getValidationMessage, getFutureValidateDateTimeMessage};
}
