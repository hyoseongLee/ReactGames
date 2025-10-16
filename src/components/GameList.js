import React from "react";
import "./GameList.css";
import GameCard from "./GameCard";

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
