import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogueMessage from '../components/DialogueMessage';

const Dialogue = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    const dialogueMessage = [
        "  Bonjour ! Je m’appelle Mehdi Raposo Développeur FullStack Javascript sur une stack MERN. Passionné d'informatique depuis petit, j'ai en 2021 effectuer un titre professionnel RNCP bac +2 Designer Web qui m'a appris les bases du développement web en HTML - CSS - Javascript et PHP.",
        " Suite à ma formation Designer Web, j'ai continué mon apprentissage dans le domaine en commençant une formation Titre Professionnel RNCP bac +3/4 - Développeur Web FullStack  en alternance chez Cloud Campus.",
        " Dans le cadre de ma formation en alternance, je recherche actuellement une entreprise dans le domaine du développement web ou mobile dans l’Yonne, l’Ile-de-France ou en 100% télétravail pour poursuivre mon apprentissage.",
        " Cette formation a pour but de me perfectionner sur des languages comme le javascript avec ses frameworks React.js et Node.js, l'approfondissement de PHP avec son framework Symfony. Durant cette formation, je vais également apprendre la gestion de projet, les méthodes de travail (agile...), la conception et modélisation",
        " Si vous souhaitez en apprendre plus sur moi, mes compétences ou mes réalisations, je vous invite à cliquez sur le bouton ci-dessous pour suivre mon aventure !"
    ]
    // TODO Ajouter toutes les phrases nécéssaires
    const NextMessage = () => {
        const increment = index + 1;
        if (increment === dialogueMessage.length) {
            navigate('/accueil')
            return
        }
        setIndex(increment)
    }
    return (
        <>
            <section className='dialogue'>
                <section className="container">
                    <figure className='personnage'>
                        <img src="./img/personnage.png" alt="" />
                    </figure>
                    <DialogueMessage message={dialogueMessage[index]} next={NextMessage} />
                </section>
            </section>
        </>
    );
};

export default Dialogue;