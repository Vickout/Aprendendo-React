import React from 'react';
import GrayImg from '../../shared/gray_Img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <GrayImg img_url={props.img_url}/>
            <DescriptionWithLink 
                description={props.description} 
                link={props.link}
            />
        </div>
    )
}

export default Planet;