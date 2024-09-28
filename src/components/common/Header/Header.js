import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { nav } from "../../data/Data"
import './header.css';

const Header = () => {
    const [navList, setNavList] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNav = () => {
        setNavList(!navList);
    };

    return (
        <header>
            <div className='container flex'>
                <div className='logo'>
                    <Link to='/'><img src='./images/ssbslogo.png' alt='' /></Link>
                </div>
                <nav className={`nav ${navList ? 'active' : ''}`}>
                    <ul className={isMobile ? "mobile-nav" : "flex"}>
                        {nav.map((list, index) => (
                            <li key={index}>
                                <Link
                                    to={list.path}
                                    className={location.pathname === list.path ? 'active' : ''}
                                    onClick={() => isMobile && setNavList(false)}
                                >
                                    {list.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {!isMobile && (
                    <div className='button flex'>
                        <a href="tel:+91 9985787007"> <i className='fa fa-phone'></i> Call Us: +91 9985787007</a>
                        <a href="tel:+91 9908122336">, +91 9908122336 </a>
                    </div>
                )}
                {isMobile && (
                    <div className='toggle'>
                        <button onClick={toggleNav}>
                            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;