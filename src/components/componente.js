import React from "react";
import '../styles/style.css'

function Testimonio(props){
    return(
        <div className="testimonio">
            <img src={require(`../assets/${props.imagen}.png`)} alt="imagen" />
            <div className="descripcion">
                <h3>{props.nombre} in {props.pais}</h3>
                <h3>{props.puesto} at {props.empresa}</h3>
                <p>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Testimonio
