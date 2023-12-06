import React, { useState, useEffect, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const AppLayout = () => {
    const [loader, setLoader] = useState(true);
    const [pokemonOne, setPokemonOne] = useState('');
    const [pokemonTwo, setPokemonTwo] = useState('');
    const [pokemonThree, setPokemonThree] = useState('');
    const [loaderBackground, setLoaderBackground] = useState('');

    const pokemonListOne = useMemo(() => [
        "abra.png",
        "bulbizarre.png",
        "carapuce.png",
        "ferosinge.png",
        "mew.png"
    ], []);
    const pokemonListTwo = useMemo(() => [
        "miaouss.png",
        "mimitoss.png",
        "mini-draco.png",
        "pikachu.png",
        "psykokwak.png"
    ], []);
    const pokemonListThree = useMemo(() => [
        "rattata.png",
        "rondoudou.png",
        "ronflex.png",
        "roucool.png",
        "salameche.png"
    ], []);
    const loaderBackgroundList = useMemo(() => [
        "illustration-paysage.webp",
        "illustration-paysage2.webp",
        "illustration-paysage3.webp",
        "illustration-paysage4.webp",
        "illustration-paysage5.webp",
        "illustration-paysage6.webp",
        "illustration-paysage7.webp",
    ], [])

    const navigate = useNavigate();
    // TODO Voir pourquoi obliger mettre un truc comme ça
    useEffect(() => {
        setLoader(true)
        const pokemonOneIndex = Math.floor(Math.random() * pokemonListOne.length);
        const pokemonOne = pokemonListOne[pokemonOneIndex]
        setPokemonOne(pokemonOne)

        const pokemonTwoIndex = Math.floor(Math.random() * pokemonListTwo.length);
        const pokemonTwo = pokemonListTwo[pokemonTwoIndex]
        setPokemonTwo(pokemonTwo)

        const pokemonThreeIndex = Math.floor(Math.random() * pokemonListThree.length);
        const pokemonThree = pokemonListThree[pokemonThreeIndex]
        setPokemonThree(pokemonThree)

        const backgroundIndex = Math.floor(Math.random() * loaderBackgroundList.length);
        const background = loaderBackgroundList[backgroundIndex]
        setLoaderBackground(background)

        setTimeout(() => {
            setLoader(false);
        }, 1700);
    }, [loaderBackgroundList, navigate, pokemonListOne, pokemonListThree, pokemonListTwo])
    return loader ? (
        <Loader pokemonOne={pokemonOne} pokemonTwo={pokemonTwo} pokemonThree={pokemonThree} background={loaderBackground} />
    ) : (
        <>
            <Outlet />
        </>
    );
};

export default AppLayout;