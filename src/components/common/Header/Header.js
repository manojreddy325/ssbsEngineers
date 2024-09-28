import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { nav } from "../../data/Data"
import './header.css';

const Header = () => {
    const [navList, setNavList] = useState(false)
    const location = useLocation();

    return (
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>
                        <Link to='/'><img src='./images/ssbslogo.png' alt='' /></Link>
                    </div>
                    <div className='nav'>
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list, index) => (
                                <li key={index}>
                                    <Link
                                        to={list.path}
                                        className={location.pathname === list.path ? 'active' : ''}
                                    >
                                        {list.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='button flex'>
                        <a href="tel:+91 9985787007"> <i className='fa fa-phone'></i> Call Us: +91 9985787007</a>
                        <a href="tel:+91 9908122336">, +91 9908122336 </a>
                    </div>
                    <div className='toggle'>
                        <button onClick={() => setNavList(!navList)}>
                            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;