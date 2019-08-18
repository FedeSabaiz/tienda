import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import Spinner from '../layout/Spinner';

const Artesanos = ( { artesanos, firestore } ) => {
    
    console.log(firestore);

    if(!artesanos) {
        return <Spinner />

    }
 
    // Eliminar artesanos
    const eliminarArtesano = (id) => {
        
        //eliminar
        firestore.delete({
            collection: 'artesanos',
            doc: id
        })

    }

    return ( 
        <div className="row">
            <div className="col-md-12 mb-4">
                <Link to="/nuevo-artesano" 
                    className="btn btn-secondary mt-4"
                >
                    Nuevo Artesano
                </Link>
            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users">
                        Artesanos
                    </i>
                </h2>
            </div>
            <table className="table table-striped mt-4">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {artesanos.map(artesano => (
                        <tr key={artesano.id}>
                            <td>{artesano.Nombre}</td>
                            <td>{artesano.Apellidos}</td>
                            <td>
                                <Link to={`/mostrar-artesano/${artesano.id}`}
                                    className="btn btn-info btn-block" >
                                    Mas información
                                </Link>

                                <button className="btn btn-danger btn-block"
                                        type="button"
                                        onClick={ () => eliminarArtesano(artesano.id) }
                                >Eliminar artesano</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
Artesanos.propTypes = {
    firestore : PropTypes.object.isRequired,
    artesanos : PropTypes.array
}

 
export default compose(
    firestoreConnect([{ collection: 'artesanos' }]),
    connect((state, props) => ({
        artesanos: state.firestore.ordered.artesanos
    }))
)(Artesanos);
// export default Artesanos;
