import { createSlice } from '@reduxjs/toolkit';
import { ExpericesPro } from '../data/portfolioData';

const ExpTeamSlice = createSlice({
    name: 'ExpTeam',
    initialState: {
        open: false,
        category: 'pro',
        list: ExpericesPro,
        listLength: ExpericesPro.length,
        exp: {},
    },
    reducers: {
        setExpTeam: (state, action) => {
            state.open = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setList: (state, action) => {
            state.list = action.payload
        },
        setListLength: (state, action) => {
            state.listLength = action.payload
        },
        setExp: (state, action) => {
            state.exp = action.payload
        }
    }
});
export const { setExpTeam, setCategory, setList, setListLength, setExp } = ExpTeamSlice.actions;
export default ExpTeamSlice.reducer;