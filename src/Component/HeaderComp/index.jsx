import React from "react";
import logo from "../../assets/logo/BuyKarooLogo.png";
import "./style.sass";
import Dropdown from "../../Helper/Dropdown";
import Input from "../../Helper/Input";
import UserIcon from "../../assets/icons/UserIcon";
import FavouriteIcon from "../../assets/icons/FavouriteIcon";
import CartIcon from "../../assets/icons/CartIcon";

const Header = () => {
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
    beauty: [{ path: "/comingsoon", name: "Coming soon.." }],
  };


  return (
    <>
      <nav className="navbar-container">
        <div className="nav-items">
          <div className="logo">
            <img className="img-logo" src={logo} alt="logo" />
          </div>
          <div className="nav-member">
            {Object.keys(NAV_MEMBER).map((category, index) => (
              <div key={index} className="member">
                <Dropdown
                  key={index}
                  categoryName={category}
                  categoryPath={`/${category}`}
                  routePath={NAV_MEMBER[category]}
                />
              </div>
            ))}
          </div>
          <div className="input-search">
            <Input
              width="200%"
              height=""
              type="text"
              placeholder="What are you looking for ?"
            />
          </div>
          <div className="icon more-icon">
            <h2 className="icon" style={{fontWeight: "bold"}}>MORE |</h2>  
            <div className="icon profile-icon">
              <UserIcon />
            </div>
            <div className="icon favorite-icon">
              <FavouriteIcon />
            </div>
            <div className="icon cart-icon">
              <CartIcon />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
