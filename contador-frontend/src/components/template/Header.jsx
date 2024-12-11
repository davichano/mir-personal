// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from '../../resources/img/logo.png'

export const Header = () => {
  return (

    <header className={"bg-body-tertiary"}>
      <div className={"container"}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand navbar-logo" href="#">
              <img src={logo} alt={"Start Up"}/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'/register'}>Registro</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'/login'}>Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
