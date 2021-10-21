import React from 'react';
import { about } from './about-data/about';

const About = () => {
    return (
        <div className='about'>
            <section className='about-container'>
                <h1>{about}</h1>
            </section>
        </div>
    );
};

export default About;
