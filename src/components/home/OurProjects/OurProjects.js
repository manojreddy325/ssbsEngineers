import React from 'react';
import './ourprojects.css';
import Heading from '../../Heading';
import OurProjectsCard from '../OurProjects/OurProjectsCard';

const OurProjects = () => {
    return (
        <>
            <section className='projects background'>
                <div className='container'>
                    <Heading title={'Our Clients'} subtitile={'Find our clients Here!!'} />
                    <div class="marquee-container">
                    <div className="marquee-content">
                           {/* <marquee><OurProjectsCard /></marquee> */}
                           <OurProjectsCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProjects;