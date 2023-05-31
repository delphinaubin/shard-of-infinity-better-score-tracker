import React from "react";
import "./App.css";
import { PlayerCounters } from "./playerCounters/PlayerCounters";
import { HEROES } from "./heroes";
import classNames from "classnames";

const templates = [
  {
    numberOfPlayers: 1,
    cssClass: "OnePlayer",
  },
  {
    numberOfPlayers: 2,
    cssClass: "TwoPlayers",
  },
  {
    numberOfPlayers: 3,
    cssClass: "ThreePlayers",
  },
  {
    numberOfPlayers: 4,
    cssClass: "FourPlayers",
  },
] as const;

function App() {
  const template = templates[0];

  return (
    <div className={classNames("App", template.cssClass)}>
      {HEROES.slice(0, template.numberOfPlayers).map(({ name }) => (
        <PlayerCounters key={name} hero={name} />
      ))}
    </div>
  );
}

export default App;
