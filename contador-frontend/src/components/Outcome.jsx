import React from "react";

export const Outcome = ({id, amount, date, seller, buyer, comment}) => {
    return (
        <div className={"card"}>
            <div className={"card-header"}>S/. {amount}</div>
            <div className={"card-body"}>
                <p><span className={"fw-bold"}>Código:</span> {id}</p>
                <p><span className={"fw-bold"}>Fecha:</span> {date}</p>
                <p><span className={"fw-bold"}>Proveedor:</span> {seller}</p>
                <p><span className={"fw-bold"}>¿Quién gastó?:</span> {buyer}</p>
                <p><span className={"fw-bold"}>Justificación:</span> {comment}</p>
                <hr/>
                <a className={"btn btn-warning w-100 m-2"}>Editar</a>
                <a className={"btn btn-danger w-100 m-2"}>Borrar</a>
            </div>
        </div>
    )
}