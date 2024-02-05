import React from 'react';

const Back = ({name,cover, title}) => {
    return(
        <>
            <section className='back'>
                <div className='container'>
                <span>{name}</span>
                <h1>{title}</h1>
                </div>
                <img src={cover} alt='' />
            </section>
        </>
    )
}

export default Back;