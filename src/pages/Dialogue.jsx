import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogueMessage from '../components/DialogueMessage';

const Dialogue = () => {
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    const dialogueMessage = [
        "  Bonjour ! Je m’appelle Mehdi Raposo Développeur FullStack React.js et Laravel. Passionné d'informatique depuis petit, j'ai en 2021 effectué un titre professionnel RNCP bac +2 Designer Web qui m'a appris les bases du développement web en HTML - CSS - Javascript et PHP.",
        " Suite à ma formation Designer Web, j'ai continué mon apprentissage dans le domaine en faisant une formation Titre Professionnel RNCP bac +3/4 - Développeur Web FullStack en alternance chez Cloud Campus.",
        " Après avoir obtenu mon bac +4, je recherche maintenant une entreprise pour poursuivre un bac +5 Chef de projet et expert en cybersécurité.",
        " Cette formation a pour but de m'apporter des compétences en gestion de projet, en cybersécurité et en développement web pour devenir un expert dans le domaine.",
        " Si vous souhaitez en apprendre plus sur moi, mes compétences ou mes réalisations, je vous invite à cliquer sur le bouton ci-dessous pour suivre mon aventure !"
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