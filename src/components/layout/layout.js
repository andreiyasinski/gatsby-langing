import React from "react";

import Header from "../header/header";


const Layout = ({ children }) => {
  return (
    <div style={{paddingRight: 30, paddingLeft: 30}}>
      <div style={{ margin: `0 auto`, maxWidth: 1100, backgroundColor: `#fff` }}>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout;