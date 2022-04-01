import React, { useState, useEffect } from 'react';
import '../css/navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleNavbarBackground = () => {
        if (window.scrollY >= 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleNavbarBackground);
        return () => {
            window.removeEventListener('scroll', toggleNavbarBackground);
        };
    }, []);

    return (
        <nav>
            <ul className={isVisible ? 'navbar active' : 'navbar'}>
                <li>
                    <a className='navlink navlink-animation' href='/'>
                        Home
                    </a>
                </li>
                <li>
                    <a className='navlink navlink-animation' href='/'>
                        About me
                    </a>
                </li>
                <li>
                    <a className='navlink navlink-animation' href='/'>
                        Projects
                    </a>
                </li>
                <li>
                    <a className='navlink navlink-animation' href='/'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
