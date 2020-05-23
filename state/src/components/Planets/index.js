import React, { Fragment } from 'react';
import Planet from './planet';

class Planets extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            planets: [
                {
                    key: "1",
                    name: "Mercúrio",
                    description: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
                    link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
                },
                {
                    key: "2",
                    name: "Plutão",
                    description: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper, uma região de corpos além da órbita de Netuno.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                    link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                },
                {
                    key: "3",
                    name: "Plutão",
                    description: "Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper, uma região de corpos além da órbita de Netuno.",
                    img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
                    link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o"
                },
            ]
        }
    }

    removeLast = () => {
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState( state => ({
            planets: new_planets
        }))
    }

    duplicateLast = () => {
        let last_planet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove Last Planet</button>
                <button onClick={this.duplicateLast}>Duplicate Last Planet</button>
                <hr/>
                {this.state.planets.map( planet => 
                    <Planet
                        key={planet.key}
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                    />
                )}
            </Fragment>
        )
    } 
}

export default Planets

//Como está dentro de uma classe é necessário colocar o "this" antes do método