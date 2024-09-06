import messagesBe from './be';
import messagesEn from './en';
import messagesPl from './pl';
import messagesUk from './uk';

import {Locale} from '../style/theme';

const messages: Record<Locale, Record<string, {id: string; defaultMessage: string}>> = {
    en: {...messagesEn},
    'be-BY': {...messagesBe},
    'uk-UA': {...messagesUk},
    'pl-PL': {...messagesPl},
};

export default messages;
