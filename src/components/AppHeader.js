import { Component } from "react";

//este componente se encarga de dibujar (renderizar) el header del app, util para
//reciclarlo alrededor de las rutas
export default class AppHeader extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Libros!</a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/libro">Insertar</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}