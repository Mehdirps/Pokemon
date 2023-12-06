import { createSlice } from "@reduxjs/toolkit";

const ReadexSlice = createSlice({
    name: 'readex',
    initialState: {
        openReadex: false,
        showRealisations: true,
        realisation: '',
        openDetails: true,
    },
    reducers: {
        setReadex: (state, action) => {
            state.openReadex = action.payload
        },
        setShowRealisation: (state, action) => {
            state.showRealisations = action.payload
        },
        setRealisation: (state, action) => {
            state.realisation = action.payload
        },
        setOpenDetails: (state, action) => {
            state.openDetails = action.payload
        }
    }
});
export const { setReadex, setShowRealisation, setRealisation, setOpenDetails } = ReadexSlice.actions;
export default ReadexSlice.reducer;