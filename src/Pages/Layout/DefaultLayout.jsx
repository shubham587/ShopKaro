import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/HeaderComp/index.jsx";
import Footer from "../../Component/FooterComp/index.jsx";
import "./DefaultStyle.sass";

const DefaultLayout = () => {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <hr />
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
