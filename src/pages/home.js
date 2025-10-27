import React from "react";
import GameList from "../components/GameList";
import games from "../data/Games";
import "./Home.css";
import useSearchStore from "../store/useStore";

const Home = () => {
  const { searchText } = useSearchStore();

  const filterGames = games.filter((game) =>
    game.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );
  return (
    <div className="home-container">
      <div className="descrition">
        <h3>"React 마스터가 될때까지! " </h3>
        <p>현재 개발 단계 중입니다.</p>
      </div>
      <GameList games={filterGames} />
    </div>
  );
};

export default Home;
