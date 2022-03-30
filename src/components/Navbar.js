import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul className='navbar-list'>
                <li>
                    <a href='/'>
                        <span aria-hidden='true'>About me</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <span aria-hidden='true'>Projects</span>
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <span aria-hidden='true'>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
