import {TypedUseSelectorHook, useSelector} from 'react-redux';
import thunk from 'redux-thunk';

import {configureStore} from '@reduxjs/toolkit';

import languageSlice from './languageSlice';
import dealUpdateSlice from './dealUpdateSlice';

const store = configureStore({
    reducer: {
        lang: languageSlice,
        dealUpdate: dealUpdateSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

// Create a typed version of the `useSelector` hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
