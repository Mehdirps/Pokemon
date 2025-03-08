import React from 'react';
import { useSelector } from 'react-redux';
import { TypeAnimation } from 'react-type-animation';

const HomeTitle = () => {
    const readex = useSelector((state) => state.readex.openReadex);
    const devCard = useSelector((state) => state.devCard.openDevCard);
    const expTeam = useSelector((state) => state.expTeam.open);
    const skillBag = useSelector((state) => state.skillsBag.open);
    const ballDisplay = useSelector((state) => state.ball.display)
    return (
        <>
            {
                readex || devCard || expTeam || skillBag || ballDisplay !== 'ball-off' ?
                    null :
                    <section className="home-title">
                        <h1>Bienvenue dans mon aventure !
                            <span className='second-line'>Venez découvrir mon parcour de
                                <span className='role'>
                                    <TypeAnimation
                                        sequence={[
                                            'Développeur Web et Mobile',
                                            3000,
                                            'Développeur FullStack',
                                            3000,
                                            'Développeur Front-end React.js',
                                            3000,
                                            'Développeur Back-end Laravel',
                                            3000,
                                            'Designer Web',
                                            3000
                                        ]}
                                        speed={10}
                                        cursor={true}
                                        repeat={Infinity}
                                    />
                                    <img src="./img/icons/computer.png" alt="Icon d'un ordinateur portable" />
                                </span>
                            </span>
                        </h1>
                    </section>
            }

        </>
    );
};

export default HomeTitle;