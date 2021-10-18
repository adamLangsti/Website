import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='container'>
                <aside className='container-data'>
                    <h1 className='header'>Hello.</h1>
                    <h2 className='content'>
                        I'm Adam Lang, I am a web developer and an aspiring
                        fullstack developer.
                    </h2>
                    <button className='abt-btn'>About</button>
                </aside>
            </div>
            <div className='quarter' />
        </>
    );
};

export default Hero;
