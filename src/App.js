import { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AppHeader from './components/AppHeader';
import LibroForm from './components/LibroForm';
import Libros from './components/Libros';

export default class App extends Component {

  //el estado del app donde guardamos los datos que vienen de las consultas
  state = {
    libro: []
  }

  //trae los libros encryptados, estos son los datos default en el app
  async traerLibrosEncrypt() {
    let datos = await fetch("http://localhost:55293/api/libroencrypt")
    datos = await datos.json()
    this.setState({
      libro: datos
    })
  }

  //trae un libro encryptado basado en el id, utilizado para los eventos "encryptar decryptar"
  traerLibroEncrypt = async (id) => {
    let datos = await fetch('http://localhost:55293/api/libroencrypt/' + id)
    datos = await datos.json()
    return datos
  }

  //trae un libro decryptado basado en el id, utilizado para los eventos "encryptar decryptar"
  traerLibroDecrypt = async (id) => {
    let datos = await fetch('http://localhost:55293/api/librodecrypt/' + id)
    datos = await datos.json()
    return datos
  }

  //consulta para crear un libro en el api
  crearLibro = async (libro) => {
    let datos = await fetch('http://localhost:55293/api/libroencrypt/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(libro)
    })
    if (datos.status === 200) {
      alert('Libro introducido!')
      window.location = "/"
    }
  }

  //una vez se monta el componente sin errores, se traen los libros encryptados
  async componentDidMount() {
    this.traerLibrosEncrypt()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={
              <div>
                <AppHeader />
                <Libros libro={this.state.libro}
                  traerLibroEncrypt={this.traerLibroEncrypt}
                  traerLibroDecrypt={this.traerLibroDecrypt} />
              </div>
            }>
            </Route>
            <Route path="/libro" element={
              <div>
                <AppHeader />
                <LibroForm crearLibro={this.crearLibro} />
              </div>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

