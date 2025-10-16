import React from 'react';
import { Link } from 'react-router-dom';
import './GameCard.css'

const GameCard = ({game}) => {
 return (
  <Link to={game.route} className='game-card'>
  <img src={game.img} alt={game.title} />
  <p>{game.title}</p>
  </Link>
 )
}

export default GameCard;