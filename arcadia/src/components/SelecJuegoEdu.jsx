import React from 'react';
import {Link} from "react-router-dom";


class SelecJuegoEdu extends React.Component {

    state={
        abierto: false,
    }
    
    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    render (){
        return (
            <>
                <div className="container_selecarcade">
                    <div className="background3edu">
                        <p id="seleccion">Selecciona un libro</p>
                        <div className="smile"></div>
                        <div className="listajuegos">
                            <Link id="cuento1" 
                                onClick={ () => window.location.href="/selecjuegosedu/cuento1"}>
                                <p id="txtc1">Rapunzel</p>
                            </Link>
                            <Link id="cuento2" 
                                onClick={() => window.location.href="/selecjuegosedu/cuento2"}>
                                <p id="txtc2">Ganso de oro</p>
                            </Link>
                            <Link id="cuento3" 
                                onClick={() => window.location.href="/selecjuegosedu/cuento3"}>
                                <p id="txtc3">Pinocho</p>
                            </Link>
    
                            <div></div>
                            
    
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default SelecJuegoEdu;