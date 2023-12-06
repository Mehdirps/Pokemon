import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from './devCard/Avatar';
import Infos from './devCard/Infos';
import Title from './devCard/DevCardHeader';

const DevCard = () => {
    const devCard = useSelector((state) => state.devCard.openDevCard);

    return (
        devCard ?
            <section className="dev-card">
                <Title />
                <div className="container">
                    <Avatar />
                    <Infos />
                </div>
            </section>
            : ''
    );
};

export default DevCard;