import {MessageDescriptor} from 'react-intl';
import {combineReducers} from 'redux';
import {createReducer, PayloadAction} from 'typesafe-actions';

import {clearAlertAction, showAlertAction, showAlertErrorAction} from './actions';
import {AlertMessage} from './types';

const messageReducer = createReducer<MessageDescriptor>(null as unknown as MessageDescriptor)
    .handleAction(
        [showAlertAction, showAlertErrorAction],
        (state: MessageDescriptor, action: PayloadAction<string, AlertMessage>) => action.payload?.message ?? state
    )
    .handleAction(clearAlertAction, () => null);

const messageValuesReducer = createReducer(null as unknown as MessageDescriptor)
    .handleAction(
        [showAlertAction, showAlertErrorAction],
        (state: MessageDescriptor, action: PayloadAction<string, AlertMessage>) => action.payload?.values ?? state
    )
    .handleAction(clearAlertAction, () => null);

const isErrorReducer = createReducer(false)
    .handleAction(showAlertErrorAction, () => true)
    .handleAction(showAlertAction, () => false);

export const alertReducer = combineReducers({
    message: messageReducer,
    values: messageValuesReducer,
    isError: isErrorReducer,
});
