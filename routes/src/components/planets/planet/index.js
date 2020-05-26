import React from 'react';
import GrayImg from '../../shared/gray_Img';
import DescriptionWithLink from '../../shared/DescriptionWithLink';

import { Link } from 'react-router-dom';

const Planet = (props) => {
    
    return (
        <div>
            <Link to={`/planet/${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <GrayImg 
                img_url={props.img_url}
                gray={props.gray}
            />
            <DescriptionWithLink 
                description={props.description} 
                link={props.link}
            />
        </div>
    )
    
}

export default Planet;