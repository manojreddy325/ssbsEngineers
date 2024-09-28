import React from 'react';
import './ourprojects.css';
import Heading from '../../Heading';
import OurProjectsCard from './OurProjectsCard';

const OurProjects = () => {
    return (
        <section className='projects background'>
            <div className='container'>
                <Heading title='Our Clients' subtitle='Find our clients Here!!' />
                <div className="projects-container">
                    <div className="projects-scroll">
                        <OurProjectsCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;