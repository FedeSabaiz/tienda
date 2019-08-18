import React from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Artesanos = ( { artesanos } ) => {
    
    if(!artesanos) return <h1>Cargando...</h1>
    console.log(artesanos.map((artesano, x)=>{
        return artesano.Nombre
    }));
    

    return ( 
        <div className="row">
            <div className="col-md-12 mb-4">
                
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
                        <th>Especialidad</th>
                        <th>Cuenta</th>
                    </tr>
                </thead>

                <tbody>
                    {artesanos.map(artesano => (
                        <tr key={artesano.id}>
                            <td>{artesano.Nombre}</td>
                            <td>{artesano.Apellidos}</td>
                            <td>{artesano.Especialidad}</td>
                            <td>{artesano.Cuenta}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
     );
}
 
export default compose(
    firestoreConnect([{ collection: 'artesanos' }]),
    connect((state, props) => ({
        artesanos: state.firestore.ordered.artesanos
    }))
)(Artesanos);
// export default Artesanos;
