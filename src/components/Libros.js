import { Component } from "react";
import LibroCard from "./LibroCard";

//clase componente del libro para iterar atraves de los datos y monstrandolos 
//utilizando el componente librocard
export default class Libros extends Component {

    render() {
        return (
            <div className="container">
                <h4 className="mt-2">Libros de la biblioteca</h4>
                <div className="row row-cols-2 g-4 mt-2">
                    {this.props.libro.map((libro, indice) => {
                        return (
                            <LibroCard
                                libro={libro}
                                key={indice}
                                indice={indice}
                                traerLibroEncrypt={this.props.traerLibroEncrypt}
                                traerLibroDecrypt={this.props.traerLibroDecrypt} />
                        )
                    })}
                </div>
            </div>
        )
    }
}