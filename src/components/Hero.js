import React from 'react';
import logo from '../media/geo.jpg';

const Hero = () => {
    return (
        <div className='container'>
            <h1 className='header'>
                Hi, I'm Adam Lang, I am a web developer and an aspiring
                fullstack developer.
            </h1>
            <button className='abt-btn'>About</button>
            <img className='bg' src={logo} alt='bg-img' />
        </div>
    );
};

export default Hero;
