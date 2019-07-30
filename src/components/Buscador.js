import React, { Component } from 'react';

class Buscador extends Component {

    BusquedaRef = React.createRef();
    obtenerDatos = (e) => {
        e.preventDefault();
        //toma el valor del input
        const termino = this.BusquedaRef.current.value;

        // envia al componente principal
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    
                    <div className="form-group col-md-8">
                        <label>
                            Busca tu Imagen
                            <input ref={this.BusquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu Imagen..." />
                        </label>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" id="buscador"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;