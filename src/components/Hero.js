import React from 'react';
import '../css/hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <article className='content-wrapper'>
                <h1 className='content-big'>Hello, I'm Adam.</h1>
                <h2 className='content-small'>
                    Javascript and ReactJS developer with a passion for a great
                    <br />
                    user experience.
                </h2>
            </article>
        </section>
    );
};

export default Hero;
