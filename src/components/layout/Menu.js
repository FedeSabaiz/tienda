import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <nav class="collapse" id="menucollapse">
            <ul>
                <li className="nav-item">
                    <Link to="./carrito">
                        Carrito
                    </Link>
                </li>
                <li>
                    <Link to="./clientes">
                        Clientes
                    </Link>
                </li>
                <li>
                    <Link to="./productos" >
                        Productos
                    </Link>
                </li>
                <li>
                    <Link to="./artesanos" >
                        Artesanos
                    </Link>
                </li>
                
            </ul>
        </nav>
     );
}
 
export default Menu;