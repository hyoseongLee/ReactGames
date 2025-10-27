import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, RockPaperScissors, TicTacToe } from "./screens";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rps" element={<RockPaperScissors />} />
          <Route path="/ttt" element={<TicTacToe />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
