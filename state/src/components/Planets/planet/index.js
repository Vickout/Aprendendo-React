import React from 'react';
import GrayImg from '../../shared/gray_Img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'

const Planet = (props) => {
    let title;
    if(props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>
    return (
        <div>
            {title}
            <GrayImg 
                img_url={props.img_url}
                gray={props.gray}
            />
            <DescriptionWithLink 
                description={props.description} 
                link={props.link}
            />
            <hr/>
        </div>
    )
}

export default Planet;