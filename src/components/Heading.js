import React from 'react';

const Heading = ({title, subtitile}) => {
    return(
        <>
            <div className="heading">
                <h1>{title}</h1>
                <p>{subtitile}</p>
            </div>
        </>
    )
}
export default Heading;