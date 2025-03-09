import React from 'react';
import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';

const Welcome = () => {

    return (
        <>
            <NavLink exact="true" to='/presentation'>
                <section className='welcome-page'>
                    <div className="container">
                        <div className="container-img">
                            <figure className="title">
                                <img src="./img/title.png" alt="Illustration du titre du site" />
                            </figure>
                            <figure className="logo">
                                <img src="./img/logo-mehdi.png" alt="Logo du site" />
                            </figure>
                        </div>
                        <div className="next">
                            <p>Appuyer pour continuer</p>
                        </div>
                        <div className="copyright">
                            <Icon icon="material-symbols:copyright-outline" />
                            <p><span className='year'>2023</span> Mehdi Raposo.</p>
                        </div>
                    </div>
                    <div className="background1"></div>
                    <div className="background2"></div>
                </section>
            </NavLink>
        </>
    );
};

export default Welcome;