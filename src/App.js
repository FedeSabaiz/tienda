import React from 'react';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Componentes del cliente

import MostrarCliente from './components/clientes/MostrarCliente';
import EditarCliente from './components/clientes/EditarCliente';
import NuevoCliente from './components/clientes/NuevoCliente';
import Cliente from './components/clientes/Cliente';

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


function App() {
    return (
        <Router>

            <Header />
            <div className="container-prin">
                <div class="collapse" id="menucollapse">
                    <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div>
                <Switch>
                    <Route exact path="/artesanos" component={Artesanos} />
                    <Route exact path="/cliente" component={Cliente} />
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App;
