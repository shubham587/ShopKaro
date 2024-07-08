import React, { useEffect, useRef } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../../Component/HeaderComp/index.jsx";
import Footer from "../../Component/FooterComp/index.jsx";
import { HashLoader } from 'react-spinners'

const KidsLayout = () => {
  const moreRef = useRef(null);
  const { state } = useNavigation()

  return (
    <div>
      {state === "loading" ? <HashLoader className="m-auto p-64" color="#f48a0d" /> : <Outlet />}
    </div>
  );
};

export default KidsLayout;
