import React, { useState, useEffect } from "react";
//import song from "../media/Sound1.mp3";
import Card from "./Card";
import Music from "./Music";
import Direc1 from "../images/Blackjack.jpg";
import Direc2 from "../images/Buscaminas.png";
import { PlayCircleOutlined, TrademarkOutlined } from "@ant-design/icons";

//import Menu from "./Menu.js";
import "../styles/App.css";
import "../styles/style.css";

import { images } from "../import.js";
import { Popover, Button } from 'antd';

function Game(state, hide, handleVisibleChange) {

  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  //sound
  //const [isPlay, setIsPlay] = useState(false);

  //const puntaje = 0;

  //CARTAS
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [counter, setCounter] = useState(0);
  const [Stargame, setStargame] = useState(true);
  //VERIFICAR
  //UNFLIPPED ES DONDE SE RESETEA EL JUEGO

  const [unflippedCards, setUnflippedCards] = useState([]);

  const [disabledCards, setDisabledCards] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  // aqui se debe implementar el reinicio del juego
  useEffect(() => {
    shuffleArray(images);
    setCards(images);
  }, []);

  useEffect(() => {
    checkForMatch();
  }, [secondCard]);

  const flipCard = (name, number) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
      //VOLTEA LA MISMA CARTA
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  const checkForMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };
  // PUNTAJE
  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    ubgradePuntaj();

    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  const resetGame = () => {
    setUnflippedCards([]);
    setCards([]);
    setDisabledCards([]);
    shuffleArray(images);
    setCards(images);
    setCounter(0);
    startgame(true);
  };
  //Puntaje
  const ubgradePuntaj = () => {
    setCounter(counter + 100);
  };

  const startgame = () => {
    setStargame(false);
  };
  return (
    <div className="app">
      <div className="row ">
        <div className="row">
          <div className="col Barra_sup">
            <Button className="btn" size="large" 
            onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade"}>
              Regresar
            </Button>
            <Button
              className="btn"
              type="primary"
              size="large"
              onClick={resetGame}
            >
              Reiniciar
            </Button>
          </div>

          <div className="row Barra_sup">Puntaje: {counter}</div>
        </div>
        <div className="col-9 cards-container">
          {Stargame && (
            <div className="Start">
              <Button
                type="primary"
                onClick={startgame}
                className="btn_start"
                shape="circle"
                ghost
              >
                <PlayCircleOutlined />
              </Button>
            </div>
          )}
          {!Stargame &&
            cards.map((card, index) => (
              <Card
                name={card.player}
                number={index}
                frontFace={card.src}
                flipCard={flipCard}
                unflippedCards={unflippedCards}
                disabledCards={disabledCards}
              />
            ))}
        </div>
      </div>
      <div className="row ">
        <div className="col menu">Menu</div>
        <div className="col-3 Juego">
          <div className="row">
            <div className="col-4">
              <img src={Direc1} className="Direction" onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade/blackjack"}/>
              <h1> Black Jack</h1>
            </div>
            <div className="col-4">
              <img src={Direc2} className="Direction" onClick={() => window.location.href="/iniciarsesion/selecjuegosarcade/buscaminas"}/>
              <h1>Buscaminas</h1>
            </div>

            <div className="col-2">
              <Music />
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Game;
