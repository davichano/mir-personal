import React from "react";
import logo from '../../resources/img/logo.png'

export const Footer = () => {
    return (
        <footer>
            <div className={"container py-4"}>
                <div className={"row"}>
                    <div className={"col-md-3 px-1 footer-company-info"}>
                        <img src={logo}/>
                        <h1>Mi contador</h1>
                        <h3>Startups Accounting</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                    </div>
                    <div className={"col-md-3  px-1 footer-menu"}>
                        <h1>Nosotros</h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">An item</li>
                            <li className="list-group-item list-group-item-action">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className={"col-md-3  px-1 footer-menu"}>
                        <h1>Servicios</h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">An item</li>
                            <li className="list-group-item list-group-item-action">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">And a fifth one</li>
                        </ul>
                    </div>
                    <div className={"col-md-3  px-1 footer-menu"}>
                        <h1>Contáctanos</h1>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">no@tiene.com</li>
                            <li className="list-group-item list-group-item-action">+51 955558569</li>
                            <li className="list-group-item">Dirección de mi casa 123</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <small>
                    2024 | Todos los derechos reservados
                </small>
            </div>
        </footer>
    )
}
