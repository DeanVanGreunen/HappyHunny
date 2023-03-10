import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/game/Game";
import PopUpModel from "./components/popup-modal/PopUpModel";

function App() {
  return (
    <div className="App">
      <Game />
      <PopUpModel allocatedWidth={480} />
    </div>
  );
}

export default App;
