import React from 'react';
import { useSelector } from 'react-redux';

const ExpDetails = () => {

    const exp = useSelector((state) => state.expTeam.exp);
    
    return (
        <section className="exp-details">
            <figure className='exp-details-logo'>
                <img src={exp.logo} alt={`Illustration du logo de l'entreprise ${exp.entreprise}`} />
            </figure>
            <h3>{exp.poste}</h3>
            <p className='exp-desc'>{exp.desc}</p>
        </section>
    );
};

export default ExpDetails;