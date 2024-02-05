import React from 'react';
import Back from '../common/Header/Back';
import img from '../images/services.jpg';
import ServicesCrad from '../services/ServicesCard';

const Services = () => {
    return(
        <>
            <section className='services mb'>
                <Back name='Services' title='Services -All Services' cover={img} />
                <div className='projects container'>
                   <ServicesCrad />
                </div>
            </section>
        </>
    )
}

export default Services;