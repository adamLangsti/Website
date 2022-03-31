import React, { useState, useEffect } from 'react';
import '../css/navbar.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleNavbarBackground = () => {
        if (window.scrollY >= 250) {
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
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About me</a>
                </li>
                <li>
                    <a href='/'>Projects</a>
                </li>
                <li>
                    <a href='/'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
