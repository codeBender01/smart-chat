import {createAction} from 'typesafe-actions';

const loadLocalization = 'global/localization';
const loadLocalizationSuccess = 'global/localizationSuccess';

export const loadLocalizationResourcesAction = createAction(loadLocalization)<string>();
export const localizationResourcesLoadedAction = createAction(loadLocalizationSuccess)<Record<string, string>>();
