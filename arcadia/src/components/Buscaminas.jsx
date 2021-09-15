import React, { Component } from 'react';
import { Card } from 'antd';
import {Link} from "react-router-dom";
import Sound from 'react-sound';
import Laguna from '../Recursos/sound/LagunaHills.mp3'

const Buscaminas= (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    return (
        <div>
            <Sound
                url={Laguna}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
            <div className="container_selecarcade">
                <div className="backgroundbusca">
                    <div className="cardBJ">
                        <Card title="BUSCAMINAS" style= {{width: 700 }} bordered={false}>
                            <p>El Buscaminas, junto con el Solitario o los Corazones, pertenecen al grupo de los primeros juegos que se implementaron en los sistemas de Windows, pero, lejos de lo que pueda parecer, estos no fueron creados con el objetivo de ofrecer entretenimiento o llamar la atención de los usuarios.</p>
                            <p>El juego consiste en despejar todas las casillas de una pantalla que no oculten una mina.Algunas casillas tienen un número, el cual indica la cantidad de minas que hay en las casillas circundantes. Así, si una casilla tiene el número 3, significa que de las ocho casillas que hay alrededor (si no es en una esquina o borde) hay 3 con minas y 5 sin minas. Si se descubre una casilla sin número indica que ninguna de las casillas vecinas tiene mina y éstas se descubren automáticamente.
                                Si se descubre una casilla con una mina se pierde la partida.Se puede poner una marca en las casillas que el jugador piensa que hay minas para ayudar a descubrir las que están cerca. </p>
                        </Card>
                    </div>
                    <Link className="txtcomingsoon btn btn-info" 
                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade"}>Coming Soon!</Link>
                </div>
            </div>
        </div>
    );
};

export default Buscaminas;
