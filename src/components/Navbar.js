import React from 'react';

const Navbar = () => {
    return (
        <ul className='nav'>
            <li className='nav-items'>
                <a className='nav-links' href=''>
                    Home
                </a>
            </li>
            <li className='nav-items'>
                <a className='nav-links' href=''>
                    About
                </a>
            </li>
            <li className='nav-items'>
                <a className='nav-links' href=''>
                    Projects
                </a>
            </li>
            <li className='nav-items'>
                <a className='nav-links' href=''>
                    Contact
                </a>
            </li>
        </ul>
    );
};

export default Navbar;
