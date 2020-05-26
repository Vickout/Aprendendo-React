import React, { useState, useEffect } from 'react';
import GrayImg from '../../shared/gray_Img';
import DescriptionWithLink from '../shared/DescriptionWithLink';
import Form from '../../planet/form';

import { useParams, useHistory } from 'react-router-dom';

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

const Planet = () => {
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    let { id } = useParams();
    let history = useHistory();
    
    useEffect(() => {
        getPlanet(id).then(data => { 
            setSatellites(data['satellites']);
            setPlanet(data['data']);
        })
    }, [])

    const goToPlanets = () => {
        history.push('/');
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite]);
    }

    return (
        <div>
            <h3>{planet.name}</h3>
            <GrayImg 
                img_url={planet.img_url}
            />
            <DescriptionWithLink 
                description={planet.description} 
                link={planet.link}
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
            <button type="button" onClick={goToPlanets}>Voltar a listagem</button>
        </div>
    )
    
}

export default Planet;