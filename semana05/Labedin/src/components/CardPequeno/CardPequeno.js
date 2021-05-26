import React from 'react';
import './CardPequeno.css'

function CardPqueno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPqueno;