import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 100,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='container'>
            <aside className='container-data'>
                <h1 className='header'>Hello.</h1>
                <h2 className='content'>
                    I'm Adam Lang, I am a web developer and an aspiring
                    fullstack developer.
                </h2>
                <button className='more-btn' onClick={scrollToTop}>
                    <h3 className='more-btn-text'>Learn more</h3>
                    <span className='more-btn-arrow'>⇩</span>
                </button>
            </aside>
        </div>
    );
};

export default Hero;
