import React from 'react';
import { useSelector } from 'react-redux';

const Ball = () => {
    const display = useSelector((state) => state.ball.display)

    return (
        <svg
            width="50mm"
            height="50mm"
            viewBox="0 0 600 297"
            id="svg5"
            className={display}>
            <g
                id="g829">
                <defs>
                    {
                        display === 'ball' ?
                            <linearGradient id='gradient'>
                                <stop offset="0%" stopColor='#575757' />
                                <stop offset="25%" stopColor='#575757' />
                                <stop offset="50%" stopColor='white' />
                                <stop offset="75%" stopColor='#575757' />
                                <stop offset="100%" stopColor='#575757' />
                            </linearGradient>
                            : ''
                    }
                </defs>
                <circle
                    style={{ fill: "#ffffff", stroke: display === 'ball' ? "url(#gradient)" : '#575757', strokeWidth: 30.939 }}
                    id="path850"
                    cx="300"
                    cy="149.18144"
                    r={'200'}
                    className='circle' />
                <circle
                    style={{ fill: "#ffffff", stroke: display === 'ball' ? "url(#gradient)" : '#575757', strokeWidth: 20.89647 }}
                    id="path850-5"
                    cx="300"
                    cy="149.18144"
                    r={'100'}
                    className='button' />
            </g>
        </svg>
    );
};

export default Ball;