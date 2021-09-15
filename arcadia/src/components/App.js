import React from 'react';
import '../styles/style.css';
// Componentes:
import Principal from './Principal'
import SelecJuegoEdu from './SelecJuegoEdu';
import SelecJuegoArcade from './SelecJuegoArcade';
import BlackJack from './BlackJack';
import JuegoArcade from './JuegoArcade';
import Registro from './Registro';
import IniciarSesion from './IniciarSesion';
import JuegoEduC1 from './JuegoEduC1';
import JuegoEduC2 from './JuegoEduC2';
import JuegoEduC3 from './JuegoEduC3';
import Buscaminas from './Buscaminas';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        {/*Contenido dinamico*/}
          {/*RUTAS: de lo más específico a lo más general*/}
                <Switch>
                    <Route path ="/selecjuegosedu/cuento1">
                        <JuegoEduC1/>
                    </Route>
                    <Route path ="/selecjuegosedu/cuento2">
                        <JuegoEduC2/>
                    </Route>
                    <Route path ="/selecjuegosedu/cuento3">
                        <JuegoEduC3/>
                    </Route>
                    <Route path ="/iniciarsesion/selecjuegosarcade/juegoarcade">
                        <JuegoArcade/>
                    </Route>
                    <Route path ="/iniciarsesion/selecjuegosarcade/buscaminas">
                        <Buscaminas/>
                    </Route>
                    <Route path ="/iniciarsesion/selecjuegosarcade/blackjack">
                        <BlackJack/>
                    </Route>
                    <Route path ="/iniciarsesion/selecjuegosarcade">
                        <SelecJuegoArcade/>
                    </Route>
                    <Route path ="/selecjuegosedu">
                        <SelecJuegoEdu/>
                    </Route>
                    <Route path ="/registro">
                        <Registro/>
                    </Route>
                    <Route path ="/iniciarsesion">
                        <IniciarSesion/>
                    </Route>
                    <Route path ="/">
                        <Principal/>
                    </Route>
                </Switch>

      </div>
    </Router>

    
  );
}

export default App;
