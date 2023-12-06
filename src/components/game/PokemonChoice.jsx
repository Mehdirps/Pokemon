import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemon, setPersonnage } from '../../stores/HeroSlice'
import { setOpenChoice } from '../../stores/HeroSlice';

const PokemonChoice = () => {

    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.hero.pokemon)
    const personnage = useSelector((state) => state.hero.personnage)
    const open = useSelector((state) => state.hero.open)

    const pokemonList = [
        {
            'name': 'abra',
            'file': 'abra.png'
        },
        {
            'name': 'bulbizarre',
            'file': 'bulbizarre.png'
        },
        {
            'name': 'carapuce',
            'file': 'carapuce.png'
        },
        {
            'name': 'ferosinge',
            'file': 'ferosinge.png'
        },
        {
            'name': 'mew',
            'file': 'mew.png'
        },
        {
            'name': 'miaouss',
            'file': 'miaouss.png'
        },
        {
            'name': 'mimitoss',
            'file': 'mimitoss.png'
        },
        {
            'name': 'mini-draco',
            'file': 'mini-draco.png'
        },
        {
            'name': 'pikachu',
            'file': 'pikachu.png'
        },
        {
            'name': 'psykokwak',
            'file': 'psykokwak.png'
        },
        {
            'name': 'rattata',
            'file': 'rattata.png'
        },
        {
            'name': 'rondoudou',
            'file': 'rondoudou.png'
        },
        {
            'name': 'ronflex',
            'file': 'ronflex.png'
        },
        {
            'name': 'roucool',
            'file': 'roucool.png'
        },
        {
            'name': 'salameche',
            'file': 'salameche.png'
        },
    ];

    return (
        <>
            {
                open ?
                    <div className='hero-choice'>
                        <h2>
                            Choisissez votre partenaire d'aventure !
                        </h2>
                        {/* <div className="hero-selected" style={{ opacity: pokemon.name ? 1 : 0 }}>
                            <p>Vous avez choisi : <span>{pokemon.name}</span></p>
                            <img src={`./img/icons/pokemons/${pokemon.file}`} alt="" />
                        </div> */}
                        <div className="change-perso" onClick={() => dispatch(setPersonnage('')) }>
                            Changer de personnage
                        </div>
                        {
                            personnage && pokemon.name ?
                                <div className="duo">
                                    <p>Voici votre duo :</p>
                                    <div className="duo-img">
                                        <img src={`./img/icons/personnages/${personnage}`} alt="" />
                                        <img src={`./img/icons/pokemons/${pokemon.file}`} alt="" />
                                    </div>
                                </div>
                                : ''
                        }
                        <div className="hero-container">
                            {
                                pokemonList.map((poke, id) =>
                                    <div className="hero" id={pokemon.name === poke.name ? 'choised' : ''} onClick={() => dispatch(setPokemon(poke))} key={id}>
                                        <p>{poke.name}</p>
                                        <figure className='hero-img'>
                                            <img src={`./img/icons/pokemons/${poke.file}`} alt="" />
                                        </figure>
                                    </div>
                                )
                            }
                        </div>
                        <div className="confirm" onClick={() =>
                            pokemon.length > 0 || open ? dispatch(setOpenChoice(false)) : ''
                        }>
                            Confirmer mon choix !
                        </div>
                    </div >
                    : ''
            }
        </>
    );
};

export default PokemonChoice;