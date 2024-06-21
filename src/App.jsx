import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IdComp from "./Component/IdComp";
import Counter from "./Component/Counter";
import DefaultLayout from "./Pages/Layout/DefaultLayout.jsx";
import HeroSection from "./Pages/HeroSection/index.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HeroSection /> },
      {
        path: "about",
        element: <h2>this is about section</h2>,
      },
      {
        path: ":id",
        element: <IdComp />,
        loader: async({request, params}) => {
          const id = params.id;
          return id;
        }
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
