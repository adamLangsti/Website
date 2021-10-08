import React from 'react';

const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div className='footer'>
            <h1>Adam Lang</h1>
        </div>
    );
};

export default Footer;
