import React from "react";
import '../estilos/testimonio.css'

export function Testimonio (props) {
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={require(`../multimedia/${props.imagen}.jpg`)} alt ="foto de rosas" />
            <div className="contenedor-texto">
                <p className="texto-nombre"> {props.nombre} </p>
                <p className="texto-precio"> {props.precio} </p>
                <p className="texto-descripcion"> {props.descripcion} </p>
            </div>
        </div>
    )
};
