import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import '../styles/style.css';

const Principal = () => {

    const [ show, setShow ] = useState( true );
   
    return (
        <Router>
            <div>
                <div className="bigcontainer_PPrincipal">
                    <div className="background">
                        <div className ="imgarcade"></div>
                        <div className="imgeducation"></div>
                        <div className="buttons">
                            <Link className="txtarcade btn btn-info" 
                                onClick={() => window.location.href="/iniciarsesion"}>ARCADE</Link>
                            <Link className="txteducation btn btn-info" 
                                onClick={() => window.location.href="/selecjuegosedu"}>EDUCACIÓN</Link>
                        </div>
                    </div> 
                </div>
            </div>
        </Router>
    );
};

export default Principal;