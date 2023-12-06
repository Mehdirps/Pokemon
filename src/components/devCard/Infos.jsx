import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const Infos = () => {
    return (
        <div className='infos'>
            <div className="identity">
                <div className="first-name">
                    <p>Nom</p>
                    <p>Raposo</p>
                </div>
                <div className="last-name">
                    <p>Prénom</p>
                    <p>Mehdi</p>
                </div>
                <div className="age">
                    <p>Age</p>
                    <p>23 ans</p>
                </div>
                <div className="post">
                    <p>Spécialité</p>
                    <p>Développeur FullStack JavaScript - MERN</p>
                </div>
                <div className="phone">
                    <p>Téléphone</p>
                    <p>06.45.68.62.12</p>
                </div>
                <div className="email">
                    <p>E-mail</p>
                    <p>mehdi.raposo77@gmail.com</p>
                </div>
            </div>
            <div className="realisation-number">
                <p>Nb  de projet</p>
                <p>{portfolioData.length}</p>
            </div>
            <div className="starting-date">
                <p>Début de l'aventure</p>
                <p>29/06/2021</p>
            </div>
            <div className="diplome">
                <p>Diplôme</p>
                <p>TP Designer Web bac +2</p>
            </div>
            <div className="formation">
                <p>En cours</p>
                <p>TP Développeur Web FullStack bac +4</p>
            </div>
            <div className="formation">
                <p>Entreprise</p>
                <p>MaPlaqueNFC</p>
            </div>
        </div>
    );
};

export default Infos;