import React from 'react';
import {Link} from "react-router-dom";

const SelecJuegoArcade = () => {
    return (
        <div>
            <div className="container_selecarcade">
                <div className="background3">
                    <p id="seleccion">Selecciona un juego</p>
                    <div className="control"></div>
                    <div className="listajuegos">
                    <Link id="blackjack" 
                        /*Falta añadir descripción de cada cuento*/
                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade/blackjack"}>
                        <p id="txtbj">Black Jack</p>
                    </Link>
                    <Link id="buscaminas" 
                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade/buscaminas"}>
                        <p id="txtbuscam">Buscaminas</p>
                    </Link>
                    <Link id="memoria" 
                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade/juegoarcade"}>
                        <p id="txtmem">Memoria</p>
                    </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelecJuegoArcade;