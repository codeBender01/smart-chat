import {connectRouter} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import {combineReducers} from 'redux';

import {alertReducer} from '../../features/alerts/reducer';

export function createRootReducer(history: History<unknown>) {
    return combineReducers({
        alert: alertReducer,
        router: connectRouter(history),
    });
}

const rootReducer = createRootReducer(createBrowserHistory());
export type RootReducer = typeof rootReducer;
