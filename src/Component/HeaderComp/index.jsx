import React from "react";
import logo from "../../assets/logo/BuyKarooLogo.png";
// import "./style.sass";
import Dropdown from "../../Helper/Dropdown";
import Input from "../../Helper/Input";
import UserIcon from "../../assets/icons/UserIcon";
import FavouriteIcon from "../../assets/icons/FavouriteIcon";
import CartIcon from "../../assets/icons/CartIcon";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/Search";
import search from "../../assets/SVG/search.svg";
import search_icon from "../../assets/SVG/search-01-stroke-rounded.svg";

const Header = ({ moreRef }) => {
  const NAV_MEMBER = {
    women: [
      {
        path: "/womenCategory?category=jeans", // path to redirect
        name: "Jeans",
      },
      {
        path: "/womenCategory?category=saree", // path to redirect
        name: "Saree",
      },
      {
        path: "/womenCategory?category=shirt", // path to redirect
        name: "Shirt",
      },
      {
        path: "/womenCategory?category=kurta", // path to redirect
        name: "Kurta",
      },
    ],
    men: [
      {
        path: "/menCategory?category=jeans", // path to redirect
        name: "Jeans",
      },
      {
        path: "/menCategory?category=sweatshirt", // path to redirect
        name: "Sweatshirt",
      },
      {
        path: "/menCategory?category=shirt", // path to redirect
        name: "Shirt",
      },
      {
        path: "/menCategory?category=t-shirt", // path to redirect
        name: "T-Shirt",
      },
    ],
    kids: [
      {
        path: "/kidsCategory?category=frocks", // path to redirect
        name: "Frocks",
      },
      {
        path: "/kidsCategory?category=pants", // path to redirect
        name: "Pants",
      },
      {
        path: "/kidsCategory?category=t-shirt", // path to redirect
        name: "T-Shirt",
      },
    ],
    beauty: [{ path: "/comingsoon", name: "Coming soon..", disable: true }],
  };

  const moreHandler = () => {
    if (moreRef.current) {
      moreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar sticky top-0 left-0 right-0 bg-white z-10">
        <nav className="navbar-container h-18 mt-5">
          <div className="nav-items flex flex-row justify-evenly w-2/3 h-max  m-auto">
            <div className="logo w-16">
              <Link to="/">
                <img className="img-logo w-max" src={logo} alt="logo" />
              </Link>
            </div>
            <div className="nav-member flex flex-row text-center gap-20 w-1/3">
              {Object.keys(NAV_MEMBER).map((category, index) => (
                <div key={index} className="member ">
                  <Dropdown
                    className="transition ease-in-out delay-150"
                    key={index}
                    categoryName={category}
                    categoryPath={`/${category}`}
                    routePath={NAV_MEMBER[category]}
                  />
                </div>
              ))}
            </div>
            <div className="input-search  ">
              <Input
                className="w-96 h-10"
                height=""
                type="text"
                placeholder={`What are you looking for ?`}
              />
            </div>
            <div className="icon more-icon  flex flex-row justify-evenly gap-8">
              <h3
                className="icon m-1 cursor-pointer"
                style={{ fontWeight: "bold" }}
                onClick={moreHandler}
              >
                MORE |
              </h3>
              <div className="icon profile-icon">
                <NavLink to="/user-info">
                  <UserIcon />
                </NavLink>
              </div>
              <div className="icon favorite-icon">
                <NavLink to="/favorite-cart">
                  <FavouriteIcon />
                </NavLink>
              </div>
              <div className="icon cart-icon">
                <NavLink to="/cart">
                  <CartIcon />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <div className="marquee bg-orange-500 text-white">
          <marquee behavior="" direction="right">
            Now Live | Biggest Sale Of The Year
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
