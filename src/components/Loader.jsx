import React from 'react';

const Loader = (props) => {

    return (
        /* <section className="loader" style={{ backgroundImage: `url(./img/loader-background/${props.background})` }}>*/
        <section className="loader">
            <div className="container">
                <p>Chargement</p>
                <div className="icons-container">
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonOne}`}
                             alt={`Illustration du pokemon ${props.pokemonOne.split('.')[0]}`}/>
                    </figure>
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonTwo}`}
                             alt={`Illustration du pokemon ${props.pokemonTwo.split('.')[0]}`}/>
                    </figure>
                    <figure>
                        <img src={`./img/icons/pokemons/${props.pokemonThree}`}
                             alt={`Illustration du pokemon ${props.pokemonThree.split('.')[0]}`}/>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Loader;