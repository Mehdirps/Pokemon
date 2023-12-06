import { createSlice } from '@reduxjs/toolkit';

const SkillsBagSlice = createSlice({
    name: 'skillsBag',
    initialState: {
        open: false,
        category: 'front-end',
        skillsList: [],
        skill: [],
    },
    reducers: {
        setSkillsBag: (state, action) => {
            state.open = action.payload
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        setSkill: (state, action) => {
            state.skill = action.payload
        }
    }
});
export const { setSkillsBag, setCategory, setSkill } = SkillsBagSlice.actions;
export default SkillsBagSlice.reducer;