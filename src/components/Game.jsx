import React, { useEffect, useState } from 'react';
import GameHero from '../components/game/GameHero';
import Choice from './game/Choice';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenChoice } from '../stores/HeroSlice';

const Game = () => {
    const [top, setTop] = useState(50);
    const [bottom, setBottom] = useState(0);
    const [left, setLeft] = useState(50);
    const [right, setRight] = useState(0);
    const pokemon = useSelector((state) => state.hero.pokemon);
    const personnage = useSelector((state) => state.hero.personnage);
    const openChoice = useSelector((state) => state.hero.open);
    const dispatch = useDispatch();
    const [windowWidth, setWindowWidth] = useState('');
    const screenWidth = window.innerWidth; 

    useEffect(() => {
        setWindowWidth(screenWidth)
    }, [screenWidth])

    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            left <= 10 ? setLeft(0) :
                setLeft(left - 5)
        }
        if (event.key === 'ArrowRight') {
            left >= 90 ? setRight(0) :
                setLeft(left + 5)
        }
        if (event.key === 'ArrowDown') {
            top >= 80 ? setBottom(0) :
                setTop(top + 5)
        }
        if (event.key === 'ArrowUp') {
            top <= 10 ? setTop(0) :
                setTop(top - 5)
        }
    }

    return (
        <>
            {
                windowWidth > 1150 ?
                    <section className='game' onKeyDown={handleKeyDown} tabIndex={0}>
                        {
                            !pokemon.name ?
                                <div className="game-button" onClick={() => window.innerWidth < 1150 ? alert('Votre taille d\'écran est trop petite, veuillez utiliser un écran de 1150px minimun !') : dispatch(setOpenChoice(true))} style={{ display: openChoice ? 'none' : 'flex' }} ><p>Jouer</p></div>
                                : ''
                        }

                        {
                            openChoice ?
                                <Choice />
                                : ''
                        }
                        {
                            personnage && pokemon.name && !openChoice ?
                                <GameHero top={top} bottom={bottom} right={right} left={left} />
                                : ''
                        }
                    </section>
                    : null
            }
        </>
    );
};

export default Game;