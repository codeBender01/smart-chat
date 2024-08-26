import {MessageDescriptor} from 'react-intl';

export type AlertMessage = {
    message: MessageDescriptor;
    values?: Record<string, string>;
};
