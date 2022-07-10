import React from 'react';
import '../css/hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <main className='main-content'>
                <header className='header'>
                    Hello, I'm Adam Lang and I am a web developer.
                </header>
                <h1 className='main-text'>
                    I have been working with Javascript and React for the past
                    two years.
                    <br />
                    In the past I have worked as a developer for a company that
                    delivers state of the art 3D applications that digitalizes
                    the complete sales and aftersales process.
                </h1>
            </main>
        </section>
    );
};

export default Hero;
