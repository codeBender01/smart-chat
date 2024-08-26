import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import {Store} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

import {configureStore} from '@reduxjs/toolkit';

import {createRootReducer} from './RootReducer';
import {RootAction, RootState} from './types';

export function initStore(): {store: Store<RootState, RootAction>; history: History<unknown>} {
    const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();
    const history = createBrowserHistory();
    const rootReducer = createRootReducer(history);

    const store = configureStore({reducer: rootReducer, middleware: [routerMiddleware(history), epicMiddleware]});

    return {store, history};
}
