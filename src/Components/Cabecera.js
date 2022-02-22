import React from 'react';

class Cabecera extends React.Component {
    titulo = 'Antoniou';
    constructor(props) {
        super(props);
    }

    render() {
        this.props.titulo = this.titulo;
        return (
            <header>
                <h1> {this.props.titulo} </h1>
            </header>
        );
    }
}

export default Cabecera;