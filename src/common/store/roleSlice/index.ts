import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    selectedRole: '',
};

const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        setRole: (state, action) => {
            state.selectedRole = action.payload;
        },
    },
});

export const {setRole} = roleSlice.actions;

export default roleSlice.reducer;
