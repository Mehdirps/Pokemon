import { createSlice } from "@reduxjs/toolkit";

const DevCardSlice = createSlice({
    name: 'devCard',
    initialState: {
        openDevCard: false,
    },
    reducers: {
        setDevCard: (state, action) => {
            state.openDevCard = action.payload
        }
    }
});
export const { setDevCard } = DevCardSlice.actions;
export default DevCardSlice.reducer;