import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Locale} from 'src/common/style/theme';

const initialState = {
    lang: <Locale>'en',
};

const language = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<Locale>) => {
            state.lang = action.payload;
        },
    },
});

export const {setLang} = language.actions;

export default language.reducer;
