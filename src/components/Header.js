import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <header className='header-container'>
            <ul className='header-wrapper'>
                <li>
                    <a href='/'>About me</a>
                </li>
                <li>
                    <a href='/'>Portfolio</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
