import React from 'react';
import './ourprojects.css';
import {ourprojects} from '../../data/Data'

const OurProjectsCrad = () => {
    return(
        <>
            <div className='content grid5 mtop'>
                {ourprojects.map((items,index) => (
                    <div className='box' key={index}>
                        <img src={items.cover} alt='' className='images' />
                        <h4>{items.name}</h4>
                        <label>{items.type}</label>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OurProjectsCrad;