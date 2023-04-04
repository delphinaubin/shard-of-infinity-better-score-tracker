import React from "react";
import "./App.css";
import { PlayerCounters } from "./playerCounters/PlayerCounters";

function App() {
  return (
    <div className="App">
      <PlayerCounters hero="Hegiminus" />
      <PlayerCounters hero="Ko syn wu" />
    </div>
  );
}

export default App;
