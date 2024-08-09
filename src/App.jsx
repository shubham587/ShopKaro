
import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IdComp from "./Component/IdComp";
import DefaultLayout from "./Pages/Layout/DefaultLayout.jsx";
// const DefaultLayout = lazy(() => import("./Pages/Layout/DefaultLayout.jsx"))
import HeroSection from "./Pages/HeroSection/index.jsx";
// const HeroSection = lazy(() => import("./Pages/HeroSection/index.jsx"))
import WomenHero from "./Pages/WomenSection/index.jsx";
// const WomenHero = lazy(() => import("./Pages/WomenSection/index.jsx"))
import MenHero from "./Pages/MenSection/index.jsx";
// const MenHero = lazy(() => import("./Pages/MenSection/index.jsx"))
import KidsHero from "./Pages/KidsSection/index.jsx";
import Card from "./Helper/Card/index.jsx";
// const KidsHero = lazy(() => import("./Pages/KidsSection/index.jsx"))
import WomenClothingPage, {
  loader as womenLoader,
} from "./Pages/WomenClothing/index.jsx";
import WomenLayout from "./Pages/Layout/WomenLayout.jsx";
import MenLayout from "./Pages/Layout/MenLayout.jsx";
import MenClothingPage, {
  loader as menLoader,
} from "./Pages/MenClothing/index.jsx";
import KidsLayout from "./Pages/Layout/KidsLayout.jsx";
import KidsClothingPage, {
  loader as kidsLoader,
} from "./Pages/KidsClothing/index";
import SiginAuth, {action as SigninAction} from "./Pages/SigninAuth/index.jsx";
import AuthLayout from "./Pages/Layout/AuthLayout.jsx";
import LoginAuth, {action as LoginAction} from "./Pages/LoginAuth/index.jsx";
import { useSelector } from "react-redux";
import { lazy } from "react";
import FavSection, {loader as FavLoader} from "./Pages/FavSection/index.jsx";
import FavLayout from "./Pages/Layout/favLayout.jsx";
import AuthErrComp from "./Component/AuthErrComp/index.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <HeroSection /> },
      {
        path: "women",
        element: <WomenLayout />,
        children: [
          {
            index: true,
            element: <WomenHero />,
          },
          {
            path: "womenCategory",
            element: <WomenClothingPage />,
            loader: womenLoader,
          },
        ],
      },
      {
        path: "men",
        element: <MenLayout />,
        children: [
          {
            index: true,
            element: <MenHero />,
          },
          {
            path: "menCategory",
            element: <MenClothingPage />,
            loader: menLoader,
          },
        ],
      },
      {
        path: "kids",
        element: <KidsLayout />,
        children: [
          {
            index: true,
            element: <KidsHero />,
          },
          {
            path: "kidsCategory",
            element: <KidsClothingPage />,
            loader: kidsLoader,
          },
        ],
      },
      {
        path: "favorite-cart",
        children: [
          {
            index: true,
            element: <FavSection />,
            errorElement: <AuthErrComp />,
            loader: FavLoader
          }
        ]
      },
      {
        path: ":id",
        element: <IdComp />,
        loader: async ({ request, params }) => {
          const id = params.id;
          return id;
        },
      },
      
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginAuth />,
        action: LoginAction
      },
      {
        path: "signin",
        element: <SiginAuth />,
        action: SigninAction
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
