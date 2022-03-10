import { Component } from "react";

export default class LibroCard extends Component {

    //en el estado definimos los valores del libro que estaran en constante cambio
    state= {
        title: '',
        isbn: '',
        autor: '',
        publisher: ''
    }

    //se ejecuta despues de que el componente se monta y no dio error
    async componentDidMount(){
        const {
            libro: {
                title, autor, isbn, publisher
            }
        } = this.props
        this.setState({
            title: title,
            isbn: isbn,
            autor: autor,
            publisher: publisher
        })
    }

    //se encarga de traer los datos de la consulta y cambiamos el estado
    //del libro que viene por id a encryptado
    encryptEvent = async (id) => {
        const datos = await this.props.traerLibroEncrypt(id)
        this.setState({
            title: datos.title,
            isbn: datos.isbn,
            autor: datos.autor,
            publisher: datos.publisher
        })
    }
    //se encarga de traer los datos de la consulta y cambiamos el estado
    //del libro que viene por id a decryptado
    decryptEvent = async (id) => {
        const datos = await this.props.traerLibroDecrypt(id)
        this.setState({
            title: datos.title,
            isbn: datos.isbn,
            autor: datos.autor,
            publisher: datos.publisher
        })
    }

    render() {
        return (         
            <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                <div className="card h-100">
                    <div className="card-body">
                        <h3 className="card-title">{this.state.title}</h3>
                        <h6 className="card-subtitle">{this.state.isbn}</h6>
                        <p className="card-text mt-2">{this.state.autor}</p>
                        <p className="card-text">{this.state.publisher}</p>
                        <a className="btn btn-outline-info mr-2" onClick={this.decryptEvent.bind(this, this.props.indice)}>Decryptar</a>
                        <a className="btn btn-outline-info" onClick={this.encryptEvent.bind(this, this.props.indice)}>Encryptar</a>
                    </div>
                </div>
            </div>
        )
    }
}