import React from 'react';
import '../css/hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <article className='hero-article'>
                <h1 className='hero-header text-content__big'>
                    Hello, I'm Adam Lang
                </h1>
                <h2 className='hero-content text-content__small'>
                    Javascript and ReactJS developer with a passion for a great
                    user experience.
                </h2>
            </article>
        </section>
    );
};

export default Hero;
