import React from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux

import createReduxStore from './createReduxStore';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Firebase
import firebaseConfig from './config/keys';

// Componentes del cliente

import MostrarCliente from './components/clientes/MostrarCliente';
import EditarCliente from './components/clientes/EditarCliente';
import NuevoCliente from './components/clientes/NuevoCliente';
import Clientes from './components/clientes/Clientes';
import Carrito from './components/clientes/Carrito';

// Componentes del artesano/vendedor

import MostrarArtesano from './components/artesanos/MostrarArtesano';
import EditarArtesano from './components/artesanos/EditarArtesano';
import NuevoArtesano from './components/artesanos/NuevoArtesano';
import Artesanos from './components/artesanos/Artesanos';
import Login from './components/layout/Login';

// Componentes del producto

import MostrarProducto from './components/productos/MostrarProducto';
import EditarProducto from './components/productos/EditarProducto';
import NuevoProducto from './components/productos/NuevoProducto';
import Productos from './components/productos/Productos';

import Header from './components/layout/Header';
import Menu from './components/layout/Menu';

function App() {

    // Configuración de firebase
    const fbConfig = firebaseConfig;

    // Configuración de react-redux-firebase
    const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true
    }

    // Inicializar intancia de firebase y firestore
    firebase.initializeApp(fbConfig);
    firebase.firestore();

    // Creación del store con los reducers. Este últio viene con el estado inicial
    const store = createReduxStore();

    // Se crea el objeto rrfProps para concentrar la configuración a ReactReduxFirebaseProvider.
    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance
    }

    return (
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps} >
                <Router>

                    <Header />
                    <div className="container">
                        
                        <Menu />

                        <Switch>
                            <Route exact path="/artesanos" component={Artesanos} />
                            <Route exact path="/mostrar-artesano/:id" component={MostrarArtesano} />
                            <Route exact path="/nuevo-artesano" component={NuevoArtesano} />
                            <Route exact path="/editar-artesano/:id" component={EditarArtesano} />
                            <Route exact path="/login" component={Login} />

                            <Route exact path="/clientes" component={Clientes} />
                            <Route exact path="/carrito" component={Carrito} />
                            <Route exact path="/mostrar-cliente/:id" component={MostrarCliente} />
                            <Route exact path="/nuevo-cliente" component={NuevoCliente} />
                            <Route exact path="/editar-cliente" component={EditarCliente} />
                            
                            <Route exact path="/productos" component={Productos} />
                            <Route exact path="/mostrar-producto/:id" component={MostrarProducto} />
                            <Route exact path="/nuevo-producto" component={NuevoProducto} />
                            <Route exact path="/editar-producto" component={EditarProducto} />
                        </Switch>
                    </div>
                </Router>
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}

export default App;
