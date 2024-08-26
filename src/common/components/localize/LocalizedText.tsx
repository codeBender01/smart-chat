import React from 'react';
import {FormattedMessage, MessageDescriptor} from 'react-intl';

export type LocalizedTextProps = {
    label: string | MessageDescriptor;
    labelParams?: any;
};

function LocalizedText({label, labelParams}: LocalizedTextProps): JSX.Element {
    return label ? <>{typeof label === 'string' ? label : <FormattedMessage {...label} values={labelParams} />}</> : <></>;
}

export default LocalizedText;
