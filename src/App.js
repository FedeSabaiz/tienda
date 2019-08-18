import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Redux

import store from './store';
import { Provider } from 'react-redux';

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

// Componentes del producto

import MostrarProducto from './components/productos/MostrarProducto';
import EditarProducto from './components/productos/EditarProducto';
import NuevoProducto from './components/productos/NuevoProducto';
import Productos from './components/productos/Productos';

import Header from './components/layout/Header';
import Menu from './components/layout/Menu';

function App() {
    return (
        <Provider store={store}>
            <Router>

                <Header />
                <div className="container">
                    
                    <Menu />

                    <Switch>
                        <Route exact path="/artesanos" component={Artesanos} />
                        <Route exact path="/mostrar/artesano" component={MostrarArtesano} />
                        <Route exact path="/nuevo-artesano" component={NuevoArtesano} />
                        <Route exact path="/editar/artesano" component={EditarArtesano} />

                        <Route exact path="/clientes" component={Clientes} />
                        <Route exact path="/carrito" component={Carrito} />
                        <Route exact path="/mostrar/cliente/:id" component={MostrarCliente} />
                        <Route exact path="/nuevo-cliente" component={NuevoCliente} />
                        <Route exact path="/editar/cliente" component={EditarCliente} />
                        
                        <Route exact path="/productos" component={Productos} />
                        <Route exact path="/mostrar/producto/:id" component={MostrarProducto} />
                        <Route exact path="/nuevo-producto" component={NuevoProducto} />
                        <Route exact path="/editar/producto" component={EditarProducto} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
