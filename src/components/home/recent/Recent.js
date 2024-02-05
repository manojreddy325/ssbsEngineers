import React from 'react';
import Heading from '../../Heading';
import RecentCard from './RecentCard';
import './recent.css';

const Recent = () => {
    return(
        <>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Our Recent Projects' subtitile='We have handed over over 100+ sites with punctuality and courage, and we are continuing to do so.............' />
                    <RecentCard />
                </div>
            </section>
        </>
    )
}

export default Recent;