import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
    return (
        <>
        {/* <p className='dev'>&#x26A0; En cours de développement !</p> */}
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;