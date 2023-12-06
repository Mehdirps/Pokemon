import React from 'react';
import { useSelector } from 'react-redux';

const GameHero = (props) => {
    const pokemon = useSelector((state) => state.hero.pokemon)
    const personnage = useSelector((state) => state.hero.personnage)

    return (
        <>
            <figure className='personnage' style={{ top: props.top + '%', left: props.left + '%', right: props.right + '%,', bottom: props.bottom + '%' }}>
                <img src={`./img/icons/personnages/${personnage}`} alt="Personnage" id='personnage' />
                <img src={`./img/icons/pokemons/${pokemon.file}`} alt={`Icon du pokemon ${pokemon.name}`} id='pokemon' />
            </figure>
        </>
    );
};

export default GameHero;