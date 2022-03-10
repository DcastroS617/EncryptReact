import { Component } from "react";

//componente que contiene el formulario principal para añadir los libros
export default class LibroForm extends Component{
    state = {
        title: '',
        isbn: '',
        autor: '',
        publisher: ''
    }

    //al terminar de llenar los datos y dar click en el boton
    //"submit" del form, se creara un libro utilizando el estado
    onSubmit = (event) => {   
        try {
            event.preventDefault()
            this.validarTextfield(this.state)  
            this.props.crearLibro(this.state)
        } catch (error) {
            alert(error.message)
        }     
           
    }

    //se encarga de escuchar el evento onchange de los textbox,
    //utiliza el nombre (name) de ellos para modificar el estado y se le da
    //el valor del value del textbox
    onChange = (event) => {
        this.setState({
            [event.target.name] :  event.target.value
        })  
    }

    validarTextfield(libro){
        if(libro.title === "" || libro.autor === "" || libro.isbn === "" || libro.publisher === "")
            throw new Error("Debe introducir los datos para poder continuar...")
    }

    render(){
        return(
            <div className="container text-left">
                <h2 className="text-center mt-2">Inserta un libro!</h2>
                <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <label>Titulo del libro</label>
                        <input className="form-control" onChange={this.onChange} name="title"></input>
                    </div>
                    <div className="form-group">
                        <label>ISBN del libro</label>
                        <input className="form-control" onChange={this.onChange} name="isbn"></input>
                    </div>
                    <div className="form-group">
                        <label>Autor del libro</label>
                        <input className="form-control" onChange={this.onChange} name="autor"></input>
                    </div>
                    <div className="form-group">
                        <label>Publicador del libro</label>
                        <input className="form-control" onChange={this.onChange} name="publisher"></input>
                    </div>
                    <div className="form-group text-right">
                    <a type="button" href="/" className="btn btn-outline-dark mr-2">Volver</a>
                    <input type="submit" value="Subir libro" className="btn btn-outline-info"/>
                    </div>
                </form>
            </div>
        )
    }
}