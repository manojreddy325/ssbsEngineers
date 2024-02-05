import React from 'react';
import { Link } from 'react-router-dom';
import './ourservices.css';
import { services } from '../../data/Data'

const OurServicesCrad = () => {
    return (
        <>
            <div className='content grid6 mtop'>
                {services.map((item, index) => (
                    <Link to={item.path} key={index} className='box'>
                        <img src={item.cover} alt='' className='images' />
                        <h4>{item.name}</h4>
                        <label>{item.type}</label>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default OurServicesCrad;