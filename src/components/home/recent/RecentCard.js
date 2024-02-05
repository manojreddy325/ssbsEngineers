import React from 'react';
import {list} from '../../data/Data';
import './recent.css';

const RecentCards = () => {
    return(
       <>
        <div className='content grid3 mtop'>
            {list.map((val,index) => {
                const {cover, location, name, type} = val;
                return(
                    <div className='box shadow' key={index}>
                        <div className='img'>
                            <img src={cover} alt='' />
                        </div>
                        <div className='text'>
                            <h4>{name}</h4>
                            <p>
                                <i className='fa fa-location-dot'></i> {location}
                            </p>
                        </div>
                        <div className='button flex'>
                            <span>{type}</span>
                        </div>
                    </div>
                )
            })}
        </div>
       </>
    )
}

export default RecentCards;