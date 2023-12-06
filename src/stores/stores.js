import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "./LanguageSlice";
import ArrayLengthSlice from "./ArrayLengthSlice";
import ReadexSlice from "./ReadexSlice";
import BallSlice from "./BallSlice";
import DevCardSlice from "./DevCardSlice";
import HeroSlice from "./HeroSlice";
import SkillsBagSlice from "./SkillsBagSlice";
import ExpTeamSlice from "./ExpTeamSlice";

export const store = configureStore({
    reducer: {
        language: LanguageSlice,
        length: ArrayLengthSlice,
        readex: ReadexSlice,
        ball: BallSlice,
        devCard: DevCardSlice,
        hero: HeroSlice,
        skillsBag: SkillsBagSlice,
        expTeam: ExpTeamSlice,
    }
})