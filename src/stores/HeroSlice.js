import { createSlice } from "@reduxjs/toolkit";

const HeroSlice = createSlice({
    name: 'hero',
    initialState: {
        pokemon: [],
        personnage: "",
        open: false,
    },
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        },
        setPersonnage: (state, action) => {
            state.personnage = action.payload
        },
        setOpenChoice: (state, action) => {
            state.open = action.payload
        }
    }
});
export const { setPokemon, setPersonnage, setOpenChoice } = HeroSlice.actions;
export default HeroSlice.reducer;