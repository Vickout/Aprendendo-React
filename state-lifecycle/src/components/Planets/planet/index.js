import React from 'react';
import GrayImg from '../../shared/gray_Img'
import DescriptionWithLink from '../../shared/DescriptionWithLink'

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satellites: []
        }
        this.id = props.id
        this.name = props.name
        this.img_url = props.img_url
        this.description = props.description
        this.link = props.link
        this.gray = props.gray 
    }

    componentDidMount() {
        getSatellites(this.id).then(data => {
            this.setState( state => ({
                satellites: data['satellites']
            }))
        })    
    }

    render() {
        return (
            <div>
                <h3>{this.name}</h3>
                <GrayImg 
                    img_url={this.img_url}
                    gray={this.gray}
                />
                <DescriptionWithLink 
                    description={this.description} 
                    link={this.link}
                />
                <h4>Satélites</h4>
                <ul>
                    {this.state.satellites.map( (satellite, index) => 
                        <li key={index}>{satellite.name}</li> 
                    )}
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Planet;