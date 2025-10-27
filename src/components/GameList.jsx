import React from "react";
import "../styles/GameList.css";
import { GameCard } from "../components";

const GameList = ({ games }) => {
  return (
      <div className="game-list">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
  );
};

export default GameList;
