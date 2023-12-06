import React from 'react';
import { Icon } from '@iconify/react';
import SortRealisations from './SortRealisations';
import { portfolioData } from '../../data/portfolioData';
import { useSelector } from 'react-redux';
import TopReadexHeader from './TopReadexHeader';


const ReadexHeader = () => {
    const length = useSelector((state) => state.length.value)
    const realisation = useSelector((state) => state.readex.showRealisations)
    return (
        <div className="readex-header">
            <TopReadexHeader />
            {
                realisation ?
                    <div className="bottom">
                        <div className="list-length">
                            <figure>
                                <img src="./img/icons/pokeball.png" alt="Icon Pokéball" />
                            </figure>
                            <p>{length} sur {portfolioData.length}</p>
                        </div>
                        <div className="sort">
                            <Icon icon="material-symbols:sort" className='sort-icon' />
                            <SortRealisations />
                        </div>
                    </div>
                    : ''
            }
        </div>
    );
};

export default ReadexHeader;