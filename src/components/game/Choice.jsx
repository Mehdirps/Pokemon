import React from 'react';
import { useSelector } from 'react-redux';
import PokemonChoice from './PokemonChoice';
import PersonnageChoice from './PersonnageChoice';

const HeroChoice = () => {

    const personnage = useSelector((state) => state.hero.personnage)

    return (
        <>
            {
                !personnage ? <PersonnageChoice /> : ''
            }
            {
                personnage ? <PokemonChoice /> : ''
            }
        </>
    );
};

export default HeroChoice;