import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
    isDealCompleted: false,
};

const dealUpdateSlice = createSlice({
    name: 'dealUpdate',
    initialState,
    reducers: {
        setDealUpdate: (state, action: PayloadAction<boolean>) => {
            state.isDealCompleted = action.payload;
        },
    },
});

export const {setDealUpdate} = dealUpdateSlice.actions;

export default dealUpdateSlice.reducer;
