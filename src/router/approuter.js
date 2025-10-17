import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/home";
import RockPaperScissors from "../games/RockPaperScissors/RPSgame";
import TicTacToe from "../games/TicTacToe/TicTacToe";
import Layout from '../components/Layout';

const Approuter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rps" element={<RockPaperScissors />} />
        <Route path="/ttt" element={<TicTacToe />} />
        </Route>
    </Routes>
  )
}

export default Approuter;