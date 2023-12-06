import React from 'react';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { setReadex, setOpenDetails, setShowRealisation } from '../../stores/ReadexSlice';
import { setLanguage } from '../../stores/LanguageSlice';


const TopReadexHeader = () => {
    const dispatch = useDispatch();

    const closeReadex = () => {
        dispatch(setReadex(false));
        dispatch(setOpenDetails(false));
        dispatch(setShowRealisation(false));
        dispatch(setLanguage('tout'))
    }
    return (
        <div className="top">
            <h2>Readex</h2>
            <figure className='icon'>
                <img src="./img/icons/pokedex.png" alt="Icon Pokédex" />
            </figure>
            <Icon icon="material-symbols:close-rounded" className='close' onClick={closeReadex} />
        </div>
    );
};

export default TopReadexHeader;