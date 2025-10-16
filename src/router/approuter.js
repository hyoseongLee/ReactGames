import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import RockPaperScissors from "../games/RockPaperScissors/RPSgame";
import TicTacToe from "../games/TicTacToe/TicTacToe";

const Approuter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/ttt" element={<TicTacToe />} />
    </Routes>
  )
}

export default Approuter;