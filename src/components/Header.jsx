import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useSearchStore } from "../store";
import { Search } from "lucide-react";
import { logger } from "../utils";

const headerLogger = logger.createLogger('Header');

const Header = () => {
  const { searchText, setSearchText } = useSearchStore();

  const onSearch = () => {
    if (searchText.trim() === "") {
      alert("검색어를 입력해주세요!");
      return;
    }
    headerLogger.log("검색어:", searchText);
  };

  const handlerKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <header className="header">
      <Link to="/" className="header-title">
        GameBox-React
      </Link>
      <div className="SearchBox">
        <input
          className="search"
          placeholder="검색어를 입력해주세요."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handlerKeyDown}
        />{" "}
        <Search onClick={onSearch} className="btn-search" />
      </div>
    </header>
  );
};

export default Header;
