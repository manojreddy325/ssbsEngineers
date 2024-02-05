import React from 'react';
import Hero from './Hero';
import OurProjects from './OurProjects/OurProjects';
import Recent from './recent/Recent';
import OurServices from './ourServices/OurServices';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
    return(
        <>
            <Hero />
            <OurProjects />
            <Recent />
            <OurServices />
            <div className='whatsapp-container'>
            <a href="https://wa.me/9985787007" className='whatsapp_float whatsapp-icon' target='_tab'><FaWhatsapp style={{height:'45px', width:'45px', color:'white'}} /></a>
          </div>
        </>
    )
}

export default Home;