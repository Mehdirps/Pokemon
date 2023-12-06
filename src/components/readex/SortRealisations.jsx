import React from 'react';
import { setLanguage } from '../../stores/LanguageSlice';
import { useDispatch, useSelector } from 'react-redux';

const SortRealisations = () => {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.value)
    return (
        <select name="" id="" onChange={(e) => dispatch(setLanguage(e.target.value))} defaultValue={language}>
            <option value="tout">Tout</option>
            <option value="react.js">React.js</option>
            <option value="react-native">React Native</option>
            <option value="node.js">Node.js</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="vue.js">vue.js</option>
            <option value="php">PHP</option>
            <option value="symfony">Symfony</option>
            <option value="wordpress">Wordpress</option>
        </select>
    );
};

export default SortRealisations;