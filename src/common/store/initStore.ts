import {configureStore} from '@reduxjs/toolkit';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import thunk from 'redux-thunk';

import languageSlice from './languageSlice';

const store = configureStore({
    reducer: {
        lang: languageSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;

// Create a typed version of the `useSelector` hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
