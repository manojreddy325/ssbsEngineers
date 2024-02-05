import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { nav } from "../../data/Data"
import './header.css';

const Header = () => {
    const [navList, setNavList] = useState(false)
    return(
        <>
            <header>
                <div className='container flex'>
                    <div className='logo'>  
                    <Link to='/'><img src='./images/ssbslogo.png' alt='' /></Link>
                    </div>
                    <div className='nav'>
                        <ul className={navList ? "small" : "flex"}>
                            {nav.map((list,index) => (
                                <li key={index}>
                                    <Link to={list.path}> {list.text} </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='button flex'>
                        {/* <button className='btn1'> */}
                        <a href="tel:+91 9985787007"> <i className='fa fa-phone'></i> Call Us: +91 9985787007</a> <a href="tel:+91 9908122336">, +91 9908122336 </a>
                        {/* </button> */}
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