import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.sass";
import classNames from "classnames";
import { useSelector } from "react-redux";
const Dropdown = ({ authClass  ,categoryName = "", categoryPath, routePath, className, clickHandler }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)
  // let authClass = categoryPath == "/auth/login" && "mb-18" 
  let dropdownClass = classNames(className, 'dropdown-items' );
  // console.log("dropdownClass", dropdownClass)
  const onClickHandler = () => {
    clickHandler()
  }
  
  return (
    <div className="dropdown absolute top-0 ">
      <NavLink className={authClass ? "anchor mb-10" : "anchor"} to={categoryPath}>
        {({ isActive }) => (
          <h2 className={isActive ? "anchors text-orange-400 " : "anchors"}>
            {typeof (categoryName) == 'string' ? categoryName.split(" ")[0].toUpperCase() : categoryName}
          </h2>
        )}
      </NavLink>
      <div className={dropdownClass}>
        {routePath.map((route, ind) => (
          <NavLink className="route-item" onClick={route.name == "Logout" ? onClickHandler : () => {}} key={ind} to={route.name == "Logout" ? "/" : route.path}>
            {/* {({ isActive }) => (
              <h2 className={isActive ? "anchors-mem text-blue-900 bg-blue-700" : "anchors"}>
                {route.name}
              </h2>
            )} */}
            {route.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
