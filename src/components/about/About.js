import React from 'react';
import './about.css';
import img from "../images/about.jpg";
import img1 from "../images/about1.jpg";
import Back from '../common/Header/Back';
import {useHistory} from 'react-router-dom';
import Heading from '../Heading';

const About = () => {
    const history = useHistory();

    const onMoreAboutUs = () => {
        history.push('/services')
    }

    return(
        <>
            <section className='about'>
                <Back name='About Us' title='About Us - Who We Are?' cover={img} />
                <div className='container flex mtop'>
                    <div className='left row'>
                        <Heading title='Our Company Story' subtitile='Check out our Company story and work process' />

                        <p>
                        Welcome to SSBS Engineers, your trusted partner in cutting-edge fire safety solutions. With a relentless commitment to excellence and safety, we have been at the forefront of providing top-notch fire alarm and protection systems, ensuring the safety and security of people and properties.
                        </p>
                        <p> At SSBS Engineers, our mission is clear: to safeguard lives and assets through state-of-the-art fire safety solutions. We are dedicated to engineering innovative systems that not only meet industry standards but exceed expectations, providing our clients with a peace of mind that their safety is in expert hands.
                        </p>
                        <p>At SSBS Engineers, safety is our top priority. We take pride in our work, and our dedication to delivering reliable, efficient, and innovative fire safety solutions is unwavering.</p>
                        <button className='btn2' onClick={onMoreAboutUs}>More About Us</button>
                    </div>
                    <div className='right row'>
                        <img src={img1} alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;