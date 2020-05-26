import React, { useState, useEffect } from 'react';
import GrayImg from '../../shared/gray_Img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'
import Form from './form';

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([]);
    
    useEffect(() => {
        getSatellites(props.id).then(data => { 
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite]);
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <GrayImg 
                img_url={props.img_url}
                gray={props.gray}
            />
            <DescriptionWithLink 
                description={props.description} 
                link={props.link}
            />
            <h4>Satélites</h4>
            <hr/>
            <Form addSatellite={addSatellite} />
            <hr/>
            <ul>
                {satellites.map( (satellite, index) => 
                    <li key={index}>{satellite.name}</li> 
                )}
            </ul>
            <hr/>
        </div>
    )
    
}

export default Planet;