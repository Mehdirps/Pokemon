import { createSlice } from "@reduxjs/toolkit";

const BallSlice = createSlice({
    name: 'display',
    initialState: {
        display: 'ball-off'
    },
    reducers: {
        setDisplay: (state, action) => {
            state.display = action.payload
        }
    }
});
export const { setDisplay } = BallSlice.actions;
export default BallSlice.reducer;