import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/HeaderComp/index.jsx";
import Footer from "../../Component/FooterComp/index.jsx";
const DefaultLayout = () => {
  const moreRef = useRef(null);

  return (
    <div>
      <Header moreRef={moreRef} />
      <Outlet />
      <hr />
      <Footer moreRef={moreRef} />
    </div>
  );
};

export default DefaultLayout;
