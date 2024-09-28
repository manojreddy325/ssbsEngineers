import React from 'react';
import Hero from './Hero';
import OurProjects from './OurProjects/OurProjects';
import Recent from './recent/Recent';
import OurServices from './ourServices/OurServices';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const Home = () => {
    const phoneNumber = '9908122336';

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    return(
        <>
            <Hero />
            <OurProjects />
            <Recent />
            <OurServices />
            <div className='contact-icons-container'>
                <button onClick={handlePhoneClick} className='contact-icon phone-icon'>
                    <div className="icon-wrapper">
                        <FaPhone />
                    </div>
                    <span className="icon-label">Call Us</span>
                </button>
                <a href={`https://wa.me/${phoneNumber}`} className='contact-icon whatsapp-icon' target='_blank' rel="noopener noreferrer">
                    <div className="icon-wrapper">
                        <FaWhatsapp />
                    </div>
                    <span className="icon-label">WhatsApp</span>
                </a>
            </div>
        </>
    )
}

export default Home;