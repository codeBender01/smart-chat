import {Epic} from 'redux-observable';
import {ActionType, StateType} from 'typesafe-actions';

import {RootActions} from './RootActions';
import {RootReducer} from './RootReducer';

export type RootState = StateType<RootReducer>;

export type RootAction = ActionType<RootActions>;

export type RootEpic = Epic<RootAction, any, RootState>;
