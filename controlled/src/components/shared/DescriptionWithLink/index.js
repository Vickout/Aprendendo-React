import React from 'react';

const DescriptionWithLink = (props) => {
    return (
        <div>
            <p>{props.description}</p>
            <a href={props.link}>Mais informações</a>
        </div>
    )
}

export default DescriptionWithLink;