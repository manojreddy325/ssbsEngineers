import React from 'react';
import { useHistory } from 'react-router-dom';
import Heading from '../../Heading.js';
import './hero.css';

const Hero = () => {
    const history = useHistory();

    const onJoinUs = () => {
        history.push('/contact');
    }
    const onKnowmore = () => {
        history.push('/services');
    }

    return(
        <>
            <section className='hero'>
                <div className='container'>
                    <Heading title={'Welcome to SSBSEngineers'} subtitile={'protect your building occupants from injury and to prevent loss of life and prevent with us!!'} />
                    <div className='button-container'>
                       <button className='btn-join' onClick={onJoinUs}>
                            Join With US
                        </button>
                        <button className='btn-know-more' onClick={onKnowmore}>
                        <i className='fa fa-arrow-right'></i>
                            know more
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;