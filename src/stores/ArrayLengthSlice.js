import { createSlice } from "@reduxjs/toolkit";

const ArrayLengthSlice = createSlice({
    name: 'length',
    initialState: {
        value: ''
    },
    reducers: {
        setLength: (state, action) => {
            state.value = action.payload
        }
    }
});
export const { setLength } = ArrayLengthSlice.actions;
export default ArrayLengthSlice.reducer;