import React from 'react';
import './fasystem.css';
import img from "../images/fabanner.jpg";
import img1 from "../images/faimage.jpg";
import Back from '../common/Header/Back';
import {useHistory} from 'react-router-dom';
import Heading from '../Heading';

const FaSystem = () => {
    const history = useHistory();

    const onMoreAboutUs = () => {
        history.push('/services')
    }

    return(
        <>
            <section className='about'>
                <Back name='Fire Alaram' title='Fire Alaram System- Installation' cover={img} />
                <div className='container flex mtop'>
                    <div className='left row'>
                        <Heading title='Fire Alaram System' subtitile='Welcome to SSBS Engineers - Your Fire Alarm System Experts' />

                        <p>
                        At SSBS Engineers, we are dedicated to enhancing safety and security through the installation of cutting-edge fire alarm systems. With a focus on high-rise buildings, commercial structures, hotels, and shopping malls, we provide comprehensive fire protection solutions that ensure the safety of occupants and the preservation of valuable assets.
                        </p>
                        <p> With years of experience in the industry, SSBS Engineers has gained a reputation as a trusted partner for fire alarm system installation. We specialize in creating customized fire safety solutions tailored to the unique needs of each project. Our team of skilled professionals understands the complexities of different building types and industries, allowing us to deliver the highest level of protection.
                        </p>
                        <p>In the realm of high-rise buildings, fire safety is paramount. Our expertise in installing fire alarm systems for tall structures ensures rapid detection, accurate alerts, and efficient evacuation processes. We meticulously design and deploy systems that conform to local fire codes and regulations while leveraging the latest technology to maximize safety.</p>
                        <button className='btn2' onClick={onMoreAboutUs}>More About Us</button>
                    </div>
                    <div className='right row'>
                        <img src={img1} alt='' className='fa-image' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaSystem;