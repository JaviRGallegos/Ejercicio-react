import React from "react";
import Cabecera from "./Cabecera";

class Cuerpo extends React.Component {
    nombre = 'Antonio';
    titulob = 'depression';
    listanombres = ['Pepe', 'Manolo', 'Jose', 'Pedro'];
    constructor(props) {
        super(props);
        this.agregarNombre() = this.agregarNombre.bind(this);
    }

    render() {
        return (
            <div>
                <Cabecera></Cabecera>
                <Listanombres listanombres={this.listanombres} /> <br></br>
                <button onClick={agregarNombre}>Agregar nombre</button>
                <button onClick={cambiarTitulo}>Cambiar título</button>
            </div>
        )
    }

    agregarNombre() {
        this.listanombres.push(this.nombre);
    }

    cambiarTitulo() {
        this.props.titulo = this.titulob;
    }
}

export default Cuerpo;