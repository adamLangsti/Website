import React from 'react';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-wrapper'>
                <AiFillGithub />
                <AiFillMail />
            </div>
        </section>
    );
};

export default Footer;
