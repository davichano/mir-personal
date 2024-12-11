// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const StartUp = ({id, name, logo, description}) => {
  const urlBacked = 'http://localhost:3000';

  return (
    <div className={"card"}>
      <img className={"card-img-top"} src={urlBacked + logo} alt={name}/>
      <div className={"card-body"}>
        <p><span className={"fw-bold"}>Código:</span> {id}</p>
        <p><span className={"fw-bold"}>Nombre:</span> {name}</p>
        <p><span className={"fw-bold"}>Descripción:</span> {description}</p>
        <hr/>
        <Link className={"btn btn-primary w-100 m-2"} key={id} to={`/startup/${id}`}>
          Ver
        </Link>
      </div>
    </div>
  );
}
