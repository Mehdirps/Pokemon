import React from 'react';
import { Outlet } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';

const MusicLayout = () => {
    return (
        <>
            <MusicPlayer />
            <Outlet />
        </>
    );
};

export default MusicLayout;