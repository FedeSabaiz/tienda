import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <div className="container">
            <div className="row menu">
                <div className="col-2">
                    
                        <button class="btn btn-success" type="button" data-toggle="collapse" data-target="#menucollapse" aria-expanded="false" aria-controls="menucollapse">
                          Menú
                        </button>
                    
                </div>

                <div className="col-4 sesion">
                    <Link>
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
