import React from 'react';

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li className='nav-items'>
                    <a className='nav-links' href=''>
                        Home
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
        </nav>
    );
};

export default Navbar;
