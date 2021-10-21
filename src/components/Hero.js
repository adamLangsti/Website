import React from 'react';

const Hero = () => {
    return (
        <div className='container'>
            <aside className='container-data'>
                <h1 className='header'>Hello.</h1>
                <h2 className='main'>
                    I'm a front-end developer and aspire to become a fullstack
                    developer one day.
                </h2>
                <h3 className='meta'>
                    I have been working in web development for around two years,
                    and I enjoy building projects to improve my skills but also
                    to learn something new.
                </h3>

                <div className='btn-container'>
                    <button className='more-btn'>
                        <h4 className='more-btn-text'>Projects</h4>
                    </button>
                    <button className='more-btn'>
                        <h4 className='more-btn-text'>Contact</h4>
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Hero;
