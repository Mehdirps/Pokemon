import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReadex, setShowRealisation } from '../stores/ReadexSlice';
import { setDevCard } from '../stores/DevCardSlice';
import { setDisplay } from '../stores/BallSlice';
import { setLanguage } from '../stores/LanguageSlice';
import { setSkillsBag } from '../stores/SkillsBagSlice';
import { setExpTeam } from '../stores/ExpTeamSlice';

const Navbar = () => {
    const readex = useSelector((state) => state.readex.openReadex)
    const devCard = useSelector((state) => state.devCard.openDevCard);
    const skillsBag = useSelector((state) => state.skillsBag.open);
    const expTeam = useSelector((state) => state.expTeam.open);
    const dispatch = useDispatch();
    const [height, setHeight] = useState(false);

    const openReadex = () => {

        if (readex === false) {
            dispatch(setDisplay('ball'))
        }

        if (readex === true) {
            dispatch(setReadex(false))
            dispatch(setShowRealisation(false))
            dispatch(setLanguage('tout'))
            return;
        }
        if (devCard === true) {
            dispatch(setDevCard(false))
        }
        if (skillsBag) {
            dispatch(setSkillsBag(false))
        }
        if (expTeam) {
            dispatch(setExpTeam(false))
        }
        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setReadex(true))
            dispatch(setShowRealisation(true))
        }, 1000)
    }
    const openDevCard = () => {

        if (devCard === false) {
            dispatch(setDisplay('ball'))
        }
        if (devCard) {
            dispatch(setDevCard(false))
            return;
        }
        if (readex) {
            dispatch(setReadex(false))
            dispatch(setLanguage('tout'))
        }
        if (skillsBag) {
            dispatch(setSkillsBag(false))
        }
        if (expTeam) {
            dispatch(setExpTeam(false))
        }
        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setDevCard(true))
        }, 1000)
    }
    const openSkillsBag = () => {

        if (skillsBag === false) {
            dispatch(setDisplay('ball'))
        }
        if (skillsBag) {
            dispatch(setSkillsBag(false))
            return;
        }
        if (readex) {
            dispatch(setReadex(false))
            dispatch(setLanguage('tout'))
        }
        if (devCard) {
            dispatch(setDevCard(false))
        }
        if (expTeam) {
            dispatch(setExpTeam(false))
        }
        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setSkillsBag(true))
        }, 1000)
    }
    const openExpTeam = () => {

        if (expTeam === false) {
            dispatch(setDisplay('ball'))
        }
        if (expTeam) {
            dispatch(setExpTeam(false))
            return;
        }
        if (readex) {
            dispatch(setReadex(false))
            dispatch(setLanguage('tout'))
        }
        if (devCard) {
            dispatch(setDevCard(false))
        }
        if (skillsBag) {
            dispatch(setSkillsBag(false))
        }
        setTimeout(() => {
            dispatch(setDisplay('ball-off'))
            dispatch(setExpTeam(true))
        }, 1000)
    }
    const openMenu = () => {
        if (height === true) {
            setHeight(false);
            return;
        }
        setHeight(true);
    }
    useEffect(() => {
        if (devCard || readex || skillsBag || expTeam) {
            setHeight(false);
            return;
        }
    }, [devCard, readex, skillsBag, expTeam]);

    return (
        <header className='header'>
            <p className='title' onClick={openMenu}>Menu principal</p>
            <nav className='navbar' style={{ height: height ? '135px' : '0' }}>
                <ul >
                    <li onClick={openReadex}>
                        <figure className='pokedex'>
                            <img src="./img/icons/pokedex.png" alt="Icon Pokédex" />
                        </figure>
                        <p>Réadex</p>
                    </li>
                    <li onClick={openSkillsBag}>
                        <figure className='pokeball'>
                            <img src="./img/icons/skillbag.png" alt="Icon Pokéball" />
                        </figure>
                        <p>Skills Bag</p>
                    </li>
                    <li onClick={openDevCard}>
                        <figure className='dresseur'>
                            <img src="./img/icons/dresseur.png" alt="Icon avatar" />
                        </figure>
                        <p>Profil</p>
                    </li>
                    <li onClick={openExpTeam}>
                        <figure className='cv'>
                            <img src="./img/icons/pokeball.png" alt="Icon C.V" />
                        </figure>
                        <p>Exp Team</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;