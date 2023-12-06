import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenDetails, setShowRealisation } from '../../stores/ReadexSlice';
import { Icon } from '@iconify/react';
import { portfolioData } from '../../data/portfolioData';

const RealisationDetails = () => {
    const realisation = useSelector((state) => state.readex.realisation)
    const dispatch = useDispatch();
    const [realisationIndex, setRealisationIndex] = useState(realisation - 1);
    // const index = ;

    const returnList = () => {
        dispatch(setOpenDetails(false));
        dispatch(setShowRealisation(true));
    }

    const next = () => {
        if (realisationIndex === portfolioData.length - 1) {
            return;
        }
        const index = realisationIndex + 1;
        setRealisationIndex(index);
    }
    const previous = () => {
        if (realisationIndex === 0) {
            return;
        }
        const index = realisationIndex - 1;
        setRealisationIndex(index);
    }
    return (
        <section className="realisation-container">
            <div className="return">
                <p onClick={returnList}><Icon icon="material-symbols:arrow-circle-left-outline" />Retour</p>
                {
                    portfolioData[realisationIndex].source ?
                        <a className="link" href={portfolioData[realisationIndex].source} target='_blank' rel="noreferrer">
                            <Icon icon="mdi:github" />
                            Code source
                        </a>
                        : portfolioData[realisationIndex].link ?
                            <a className="link" href={portfolioData[realisationIndex].link} target='_blank' rel="noreferrer">
                                <Icon icon="dashicons:admin-site-alt" />
                                Lien vers le site
                            </a>
                            : ''

                }
            </div>
            <div className="next-prev">
                {
                    realisationIndex > 0 ?
                        <p onClick={previous}><Icon icon="material-symbols:arrow-right-alt-rounded" className='icon' hFlip={true} />Précédent</p>
                        : <p></p>
                }
                {
                    realisationIndex !== portfolioData.length - 1 ?
                        <p onClick={next}>Suivant<Icon icon="material-symbols:arrow-right-alt-rounded" className='icon' /></p>
                        : <p></p>
                }
            </div>
            <section className="container">
                <div className="infos">
                    <p>n°{portfolioData[realisationIndex].id}</p>
                    <h2>{portfolioData[realisationIndex].name}</h2>
                    <p>Temps de réalisation: {portfolioData[realisationIndex].realisationDuration}</p>
                    <div className="languages">
                        {
                            portfolioData[realisationIndex].languages.filter(language => language !== 'tout').map((language, id) =>
                                <p key={id} id={language.split('.')[0]}>{language}</p>
                            )
                        }
                    </div>
                </div>
                <div className="other-infos">
                    <p className="description"><img src={portfolioData[realisationIndex].picture} alt="" />{portfolioData[realisationIndex].info}</p>
                </div>
            </section>
        </section>
    );
};

export default RealisationDetails;