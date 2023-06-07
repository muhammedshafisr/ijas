import React from "react";
import NavBar from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="wrapper">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
