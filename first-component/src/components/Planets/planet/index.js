import React from 'react';
import "./style.css"

const Planet = () => {
    return (
        <div>
            <h4>Mercúrio</h4>
            <img class ="gray-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" alt="mercúrio"/>
            <p>Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol 
                a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta 
                a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar.</p>
        </div>
    )
}

export default Planet;