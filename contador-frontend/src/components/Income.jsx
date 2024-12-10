import React from "react";

export const Income = ({id, date, amount, customer}) => {
    return (
        <div className={"card"}>
            <div className={"card-header"}>S/. {amount}</div>
            <div className={"card-body"}>
                <p><span className={"fw-bold"}>Código:</span> {id}</p>
                <p><span className={"fw-bold"}>Fecha:</span> {date}</p>
                <p><span className={"fw-bold"}>Cliente:</span> {customer}</p>
                <hr/>
                <a className={"btn btn-warning w-100 m-2"}>Editar</a>
                <a className={"btn btn-danger w-100 m-2"}>Borrar</a>
            </div>
        </div>
    )
}