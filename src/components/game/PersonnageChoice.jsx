import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonnage } from '../../stores/HeroSlice'
import { setOpenChoice } from '../../stores/HeroSlice';

const PersonnageChoice = () => {

    const dispatch = useDispatch();
    const personnage = useSelector((state) => state.hero.personnage)
    const open = useSelector((state) => state.hero.open)
    const personnageList = [
        'heroine-ecarlate.png',
        'heroine-violet.png',
        'heros-ecarlate.png',
        'heros-violet.png',
        'menzi.png',
        'pepper.png',
    ];
    console.log(personnage)
    return (
        <>
            {
                open ?
                    <div className='hero-choice'>
                        <h2>
                            Choisissez votre personnage !
                        </h2>
                        <div className="hero-container">
                            {
                                personnageList.map((perso, id) =>
                                    <div className="hero" id={personnage === perso ? 'choised' : ''} onClick={() => dispatch(setPersonnage(perso))} key={id}>
                                        <p>{perso.name}</p>
                                        <figure className='personnage-img'>
                                            <img src={`./img/icons/personnages/${perso}`} alt="" />
                                        </figure>
                                    </div>
                                )
                            }
                        </div>
                        <div className="confirm" onClick={() =>
                            personnage.length > 0 || open ? dispatch(setOpenChoice(false)) : ''
                        }>
                            Confirmer mon choix !
                        </div>
                    </div >
                    : ''
            }
        </>
    );
};

export default PersonnageChoice;