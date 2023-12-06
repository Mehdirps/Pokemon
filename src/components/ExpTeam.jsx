import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setExpTeam, setList, setListLength } from '../stores/ExpTeamSlice';
import ExpList from './expTeam/ExpList';
import ExpDetails from './expTeam/ExpDetails';
import { ExpericesPro, ExpericesSco } from '../data/portfolioData';


const ExpTeam = () => {
    const open = useSelector((state) => state.expTeam.open);
    const expCat = useSelector((state) => state.expTeam.category);
    const dispatch = useDispatch();

    return (
        <>
            {
                open ?
                    <section className="expTeam">
                        <section className="expTeam-header">
                            <div className="title">
                                <img src="./img/icons/empty-pokeball.png" alt="Icon d'une pokemon" />
                                <h2>Éxperiences</h2>
                            </div>
                            <div className="category-btns">
                                <p onClick={() => {
                                    dispatch(setCategory('pro'));
                                    dispatch(setList(ExpericesPro));
                                    dispatch(setListLength(ExpericesPro.length))
                                }} className={expCat === 'pro' ? 'selected' : null}>Pro</p>
                                <p onClick={() => {
                                    dispatch(setCategory('education'));
                                    dispatch(setList(ExpericesSco));
                                    dispatch(setListLength(ExpericesSco.length))
                                }} className={expCat === 'education' ? 'selected' : null}>Formation</p>
                            </div>
                        </section>
                        <section className="expTeam-container">
                            <ExpList />
                            <ExpDetails />
                        </section>
                        <img className='close-button' src="./img/icons/close-button.png" alt='Bouton de fermeture' onClick={() => dispatch(setExpTeam(false))} />
                    </section>
                    : null
            }
        </>
    );
};

export default ExpTeam;