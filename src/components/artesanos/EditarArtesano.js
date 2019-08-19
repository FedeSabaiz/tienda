import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import Artesanos from './Artesanos';

class EditarArtesano extends React.Component {
    // Refs para leer los cambios al formulario
    nombreInput = React.createRef();
    apellidosInput = React.createRef();
    especialidadInput = React.createRef();
    cuentaInput = React.createRef();

    editarArtesano = e => {
        e.preventDefault();

        // Objeto que va a actualizar
        const datosAct = {
            nombre : this.nombreInput.current.value,
            apellidos: this.apellidosInput.current.value,
            especialidad: this.especialidadInput.current.value,
            cuenta: this.cuentaInput.current.value
        }

        // Extraer firestore y history de props
        const { artesano, firestore, history } = this.props;

        // Almacenar en la base de datos co nfirestore
        // Editar el artesano con los datos de datosAct
        firestore.update({
            collection: 'artesanos',
            doc: artesano.id
        }, datosAct ).then(history.push('/artesanos'))
    }

    render() { 

        const { artesano } = this.props;

        if(!artesano) return <Spinner />

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
                    <h2>Editar artesano</h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.editarArtesano}>
                                <div className="form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del artesano"
                                        require="true"
                                        ref={this.nombreInput}
                                        defaultValue={artesano.nombre}
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
                                        ref={this.apellidosInput}
                                        defaultValue={artesano.apellidos}
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
                                        ref={this.especialidadInput}
                                        defaultValue={artesano.especialidad}
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
                                        ref={this.cuentaInput}
                                        defaultValue={artesano.cuenta}
                                    />
                                </div>

                                <input 
                                    type="submit"
                                    value="Editar Artesano"
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
EditarArtesano.porpTypes = {
    firestore: PropTypes.object.isRequired
}
 
export default compose(
    firestoreConnect(props => [
        {
            collection : 'artesanos',
            storeAs : 'artesano',
            doc : props.match.params.id
        }
    ]), connect(({ firestore: { ordered }}, props ) => ({
        artesano: ordered.artesano && ordered.artesano[0]
    }))
)(EditarArtesano);
