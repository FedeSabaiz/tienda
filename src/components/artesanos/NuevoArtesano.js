import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class NuevoArtesano extends Component {
    state = { 
        nombre: '',
        apellidos: '',
        especialidad: '',
        cuenta: ''
     }

     // Agrega un nuevo artesano a la BD
     agregarArtesano = e => {
        e.preventDefault();

        // Extraer los valores del state
        const nuevoArtesano = {...this.state}
        console.log(this.props.firestore)

        // Extraer firestore de props
        const { firestore } = this.props;

        // Guardarlo en la BD
        firestore.add({ collection : 'artesanos' }, nuevoArtesano)
            .then(() => this.props.history.push('/artesanos'))

     }

     // Extrae los valores del input y los coloca en el state
     leerDato = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }


    render() { 
        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={`/artesanos`}
                        className="btn btn-primary"                    
                    >
                        Volver al listado.
                    </Link>
                </div>

                <div className="col">
                    <h2>Nuevo suscriptor</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.agregarArtesano}>
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del artesano"
                                        require="true"
                                        onChange={this.leerDato}
                                        defaultValue={this.state.nombre}
                                    />
                                </div>   
                                
                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="apellidos"
                                        placeholder="Apellidos del artesano"
                                        require="true"
                                        onChange={this.leerDato}
                                        defaultValue={this.state.apellidos}
                                    />
                                </div>

                                <div className="form-gruop">
                                    <label htmlFor="">Especialidad</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="especialidad"
                                        placeholder="Especialidad del artesano"
                                        require="true"
                                        onChange={this.leerDato}
                                        defaultValue={this.state.especialidad}
                                    />
                                </div>
                                    
                                <div className="form-group">
                                    <label htmlFor="">Cuenta</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="cuenta"
                                        placeholder="Cuenta del artesano"
                                        require="true"
                                        onChange={this.leerDato}
                                        defaultValue={this.state.cuenta}
                                    />
                                </div>

                                <input 
                                    type="submit"
                                    value="Agregar Artesano"
                                    className="btn btn-success"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
NuevoArtesano.propTypes = {
    firestore : PropTypes.object.isRequired
}

 
export default firestoreConnect()(NuevoArtesano);