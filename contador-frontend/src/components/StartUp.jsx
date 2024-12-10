import React from "react";
import { Link } from 'react-router-dom';

export const StartUp = ({id, name, logo, ruc}) => {
    return (
        <div className={"card"}>
            <img className={"card-img-top"} src={logo} alt={name}/>
            <div className={"card-body"}>
                <p><span className={"fw-bold"}>Código:</span> {id}</p>
                <p><span className={"fw-bold"}>Nombre:</span> {name}</p>
                <p><span className={"fw-bold"}>RUC:</span> {ruc}</p>
                <hr/>
                <Link className={"btn btn-primary w-100 m-2"} key={id} to={`/startup/${id}`}>
                    Ver
                </Link>
                <a className={"btn btn-warning w-100 m-2"}>Editar</a>
            </div>
        </div>
    );
}