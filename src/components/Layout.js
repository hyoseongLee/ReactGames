import React from "react";
import Header from "./Header";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
