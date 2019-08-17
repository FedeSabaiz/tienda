import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="container-menu">
            <div className="row">
                <div className="col">
                    
                        <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#menucollapse" aria-expanded="false" aria-controls="menucollapse">
                          Menú
                        </button>
                    
                </div>

                <div className="col">
                    <Link className="sesion">
                      Sign In
                    </Link>
                    <span>|</span>
                    <Link>
                      Log In
                    </Link>
                    
                </div>

               
            </div>
        </div>
    );
}
 
export default Header;
