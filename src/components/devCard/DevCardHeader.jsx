import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { setDevCard } from '../../stores/DevCardSlice'

const Title = () => {
    const dispatch = useDispatch();

    const closeDevCard = () => {
        dispatch(setDevCard(false));
    }
    return (
        <div className="devCard-header">
            <div className="title">
                <img src="./img/icons/pokeball.png" alt="Pokeball" />
                <h2> Carte de développeur </h2>
                <img src="./img/icons/pokeball.png" alt="Pokeball" />
            </div>
            <p className='close' onClick={closeDevCard}><Icon icon="ic:baseline-close" /></p>
        </div>
    );
};

export default Title;