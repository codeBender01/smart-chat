import {createAction} from 'typesafe-actions';

import {AlertMessage} from './types';

export const showAlertAction = createAction('alert/show')<AlertMessage>();
export const showAlertErrorAction = createAction('alert/showError')<AlertMessage>();
export const clearAlertAction = createAction('alert/clear')<void>();
