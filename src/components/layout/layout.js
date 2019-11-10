import React from "react";
import Header from "../header/header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout;