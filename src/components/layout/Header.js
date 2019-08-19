import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends React.Component {
    state = { 
         usuarioAuth: false
     }

    // Recibe los props automáticamente
    static getDerivedStateFromProps(nextProps, prevState) {
        const { auth } = nextProps;

        if(auth.uid) {
          return { usuarioAuth: true }
        } else {
          return { usuarioAuth: false }
        }
    }

    // Cerrar sesión
    cerrarSesion = () => {
      const { firebase } = this.props;
      firebase.logout();
    }

    render() {

        const { usuarioAuth } = this.state;
        const { auth } = this.props;

        return ( 
            <div className="container">
                <div className="row menu">
                    <div className="col-2">
                        
                        <button className="btn btn-success" type="button" data-toggle="collapse" data-target="#menucollapse" aria-expanded="false" aria-controls="menucollapse">
                          Menú
                        </button>
                        
                    </div>
                    { usuarioAuth ? (
                        <div className="col-4 sesion">
                            <Link to={'/'}>
                              Sign In
                            </Link>
                            <span>|</span>
                            <Link to={'/login'}>
                              Log In
                            </Link>
                            
                        </div>
                    ) : null }

                    { usuarioAuth ? (
                        <div className="col-2">
                            <ul>
                                <Link>
                                    { auth.email }
                                </Link>
                                <button className="button btn-secondary" onClick={this.cerrarSesion}>
                                    Cerrar sesión
                                </button>
                            </ul>
                        </div>
                    ) : null }
                  
                </div>
            </div>
        );
    }
}
Header.propTypes = {
    firebase : PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}


export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(Header);
