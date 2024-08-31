import messagesBe from './be';
import messagesEn from './en';
import messagesPl from './pl';
import messagesUk from './uk';

const messages = {
    en: messagesEn,
    ['uk-UA']: messagesUk,
    ['be-BY']: messagesBe,
    ['pl-PL']: messagesPl,
};

export default messages;
