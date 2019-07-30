import React,{Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotrom');
    elemento.scrollIntoView('smooth','end');
  }

  paginaAnterior = () => {
    // console.log('Anterior');
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    // Si la pagina es 1, ya no ir hacia atras
    if(pagina === 1) return null;

    //Restar uno a la pagina actual
    pagina -= 1;

    //agregar el cambio al state
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });

    // console.log(pagina);
  }
  paginaSiguiente = () => {
    // console.log('Siguiente...');
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;

    //sumar uno a la pagina actual
    pagina += 1;
    //agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    // console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=13166503-f95feba3af70f876e20122795&q=${termino}&per_page=30&page=${pagina}`;
    // console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }
  render(){
    return (
      <div className="app container">
        <div className="jumbotrom">
          <p className="lead text-center">Buscador de Imagenes</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado 
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div>
      </div>
    )
  }
}

export default App;