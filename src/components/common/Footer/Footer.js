import React from 'react';
import { footer } from '../../data/Data'
import { useHistory, Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    const history = useHistory();

    const onFooterContact = () => {
        history.push('/contact');
    }
    return (
        <>
            <section className="footerConatct">
                <div className="container">
                    <div className="send flex">
                        <div className="text">
                            <h1>Do You Have Questions?</h1>
                            <p>We'll help you to grow your career and gwoth. </p>
                        </div>
                        <button className='btn5' onClick={onFooterContact}>Contact Us Today</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className='container'>
                    <div className='box'>
                        <div className='logo'>
                            <Link to='/'><img src="../images/ssbslogo.PNG" alt="" /></Link>
                            <h2>You can contact us by <br />clicking the links below!! </h2>
                            <div className='button flex'>
                            <a href="mailto:ssbsengineers@gmail.com?subject=Important!&body=Hi." target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-envelope"></i> 
                                ssbsengineers@gmail.com
                            </a>
                            </div>
                            <div className='button flex'>
                            <a href="mailto:ssbssandeep1@gmail.com?subject=Important!&body=Hi." target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-envelope"></i> ssbssandeep1@gmail.com </a>
                                </div>
                                <div className='button flex'>
                                <a href="tel:+91 9985787007">
                                <i class="fa fa-phone"></i>  +91 9985787007
                            </a>
                                </div>
                            <div className='button flex'>
                            <a href="tel:+91 9908122336">
                                <i class="fa fa-phone" style={{marginBottom:'20px'}}></i>  +91 9908122336
                            </a>
                            </div>
                            {/* <div className='input flex'>
                                <input type="text" placeholder='Email Address' name='' id= '' />
                                <button>Subscribe</button>
                            </div> */}
                        </div>
                    </div>

                    {footer.map((val) => (
                        <div className='box'>
                            <h3>{val.title}</h3>
                            <ul>
                                {val.text.map((items) => (
                                    <Link to={items.path}><li>{items.list}</li> </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </footer>
            <div className='legal'>
                <span> © Copyright 2023 All rights reserved by SSBSENGINEERS. </span>
            </div>
        </>
    )
}

export default Footer;