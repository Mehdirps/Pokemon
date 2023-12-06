import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExp } from '../../stores/ExpTeamSlice';

const ExpCard = (item) => {
    const exp = item.item;
    const dispatch = useDispatch();
    const expSelected = useSelector((state) => state.expTeam.exp);

    return (
        <article className='expCard' id={expSelected.id === exp.id ? 'selected-exp' : null
        } onClick={() => dispatch(setExp(exp))}>
            <figure className="logo" >
                <img src={exp.logo} alt={`Illustration du logo de l'entreprise ${exp.entreprise}`} style={{ width: '50px' }} />
            </figure>
            <div className="infos">
                <h3>{exp.entreprise}</h3>
                <span className='life'></span>
                <p>{exp.date}</p>
            </div>
            <p className='exp-id'>N° {exp.id}</p>
            {expSelected.id === exp.id ?
                <img className='selected-exp-arraw' src="./img/icons/arraw.png" alt="Illustration d'une flèche" />
                : null
            }

        </article >
    );
};

export default ExpCard;