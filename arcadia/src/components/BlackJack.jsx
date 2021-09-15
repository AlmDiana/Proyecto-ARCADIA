import React from 'react';
import { Card } from 'antd';
import {Link} from "react-router-dom";
import Sound from 'react-sound';
import Laguna from '../Recursos/sound/LagunaHills.mp3'

const BlackJack = (
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
                <div className="backgroundblack">
                    <div className="cardBJ">
                        <Card title="BLACK JACK" style= {{width: 700 }} bordered={false}>
                            <p>El blackjack, también llamado veintiuno, es un juego de cartas, propio de los casinos con una o más barajas inglesas de 52 cartas sin los comodines, que consiste en sumar un valor lo más próximo a 21 pero sin pasarse. En un casino cada jugador de la mesa juega únicamente contra el crupier, intentando conseguir una mejor jugada que este.</p>
                            <p>Cada jugador tiene la posibilidad de plantarse y quedarse con cualquier puntuación, o de pedir más cartas hasta alcanzar los 21 puntos. Alcanzar los 21 puntos con más de una carta extra no se considera blackjack, siendo por tanto esa jugada inferior al blackjack con dos cartas. Si al pedir una nueva carta se pasa de 21, el jugador pierde automáticamente la partida y sus cartas y apuesta serán retiradas por el crupier. Cuando todos los jugadores hayan pedido sus cartas, el crupier mostrará su segunda carta boca abajo y sacará más cartas si fuera necesario hasta sumar 17 o más puntos para alcanzar el número 21, momento en el que se plantará. </p>
                        </Card>
                    </div>
                    <Link className="txtcomingsoon btn btn-info" 
                        onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade"}>Coming Soon!</Link>
                </div>
            </div>
        </div>
    );
};

export default BlackJack;