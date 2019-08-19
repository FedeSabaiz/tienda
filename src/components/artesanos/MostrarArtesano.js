import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const MostrarArtesano = ({artesano}) => {

    if(!artesano) return <Spinner />

    return ( 
        <div className="container">
            <div className="row">
                <div className="col col-md-6 mb-4">
                    <Link to="/artesanos" className="btn btn-secondary" >
                        Volver al listado
                    </Link>
                </div>
                <div className="col col-md-6">
                <Link to={`/editar-artesano/${artesano.id}`}
                    className="btn btn-alert float-right" >
                    Editar registro
                </Link>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h2 className="mb-4">
                        {artesano.nombre} {artesano.apellidos}
                    </h2>

                    <h5>Especialidad:</h5>

                    <p>
                        {`${artesano.especialidad}`}
                    </p>

                    <h5>No. de cuenta</h5>

                    <p>
                        {artesano.cuenta}
                    </p>
                </div>
            </div>   
        </div> 
     );
}
MostrarArtesano.propTypes = {
    firestore : PropTypes.object.isRequired
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
)(MostrarArtesano);