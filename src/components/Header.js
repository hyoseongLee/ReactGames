import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-title">
        GameBox-React
      </Link>
      <input className="search" placeholder="검색어를 입력해주세요."></input>
    </header>
  );
};

export default Header;
