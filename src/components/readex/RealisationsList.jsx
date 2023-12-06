import React, { useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLength } from '../../stores/ArrayLengthSlice';
import { setShowRealisation, setRealisation, setOpenDetails } from '../../stores/ReadexSlice';

const RéalisationsList = () => {
    const language = useSelector((state) => state.language.value)
    const length = useSelector((state) => state.length.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const realisationArray = [];
    const dispatch = useDispatch();
    const emptyRealisation = [];

    useEffect(() => {
        portfolioData.map((realisation) =>
            realisation.languages ?
                realisation.languages.includes(language) ?
                    realisationArray.push(realisation)
                    : ''
                : ''
        )
        dispatch(setLength(realisationArray.length));

    }, [dispatch, language, realisationArray])

    if (realisationArray.length < 11) {
        const noRealisation = portfolioData.length - length;
        for (let i = 0; i < noRealisation; i++) {
            emptyRealisation.push(<div className="empty-realisation" key={i}><p></p></div>)
        }
    }

    const showRealisationDetails = (id) => {
        dispatch(setRealisation(id));
        dispatch(setOpenDetails(true));
        dispatch(setShowRealisation(false));
    }
    return (
        <section className='realisations-list'>
            <div className="container">
                {
                    portfolioData.map((realisation, id) =>
                        realisation.languages.includes(language) ?
                            <div className="realisation" key={id} onClick={() => showRealisationDetails(realisation.id)}>
                                <div className="icons">
                                    {
                                        realisation.languagesIcons.map((icon, id) =>
                                            <i className={icon} key={id}></i>
                                        )
                                    }
                                </div>
                                <p className='name'>{realisation.name}</p>
                                <p className='id'>{realisation.id}</p>
                            </div>
                            : ''
                    )
                }
                {emptyRealisation}
            </div>
        </section>
    );
};

export default RéalisationsList;