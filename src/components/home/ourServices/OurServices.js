import React from 'react';
import './ourservices.css';
import Heading from '../../Heading';
import OurServicesCard from '../ourServices/OurServicesCard';

const OurServices = () => {
    return (
        <>
            <section className='projects background'>
                <div className='container'>
                    <Heading title={'Our Services'} subtitile={'Services We Do!!'} />
                    {/* <div class="marquee-container">
                    <div className="marquee-content"> */}
                           {/* <marquee><OurProjectsCard /></marquee> */}
                           <OurServicesCard />
                        </div>
                    {/* </div>
                </div> */}
            </section>
        </>
    )
}

export default OurServices;