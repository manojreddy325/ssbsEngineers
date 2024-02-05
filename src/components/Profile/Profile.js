import React from 'react';
import './profile.css';
import img from "../images/profile.jpg";
import img1 from "../images/ssbslogo.PNG";
import Back from '../common/Header/Back';
import Heading from '../Heading';

const Profile = () => {
    return(
        <>
            <section className='about'>
                <Back name='Profile' title='Profile - Download Our Profile' cover={img} />
                <div className='container flex mtop'>
                    <div className='left row'>
                        <Heading title='Our Company Profile' subtitile='Check out our Company profile by clicking the download button' />

                       <a href="SSBS ENGINEERS-Profile.pdf"
                        download="SSBS ENGINEERS-Profile.pdf">
                        <button className='btn2'>Download Our Profile</button></a>
                    </div>
                    <div className='right row'>
                        <img src={img1} alt='' className='profile-logo'/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;