import React from 'react';
import logo from '../media/nature.jpeg';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={logo} className='backdrop' alt='space' />
            <div className='backdrop-tint' />
            <h1 className='header'>Hello</h1>
        </div>
    );
};

export default Hero;
