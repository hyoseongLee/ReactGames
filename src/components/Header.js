import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
    <div className='header-title'>GameBox-React</div>
    <div> <input className="search" placeholder='검색어를 입력해주세요.'></input></div>
  </header>
  )
}

export default Header;
