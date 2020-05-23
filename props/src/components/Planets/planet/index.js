import React from 'react';
import GrayImg from '../../shared/gray_Img'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <GrayImg img_url={props.img_url}/>
            <p>{props.description}</p>
        </div>
    )
}

export default Planet;