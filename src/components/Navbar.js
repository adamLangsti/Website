import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-items'>
                    <a className='navbar-links' href=''>
                        Home
                    </a>
                </li>
                <li className='navbar-items'>
                    <a className='navbar-links' href=''>
                        Projects
                    </a>
                </li>
                <li className='navbar-items'>
                    <a className='navbar-links' href=''>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
