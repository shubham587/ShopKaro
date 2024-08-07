import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.sass";
import classNames from "classnames";

const Dropdown = ({ categoryName=".", categoryPath, routePath, className }) => {
  let dropdownClass = classNames(className, "dropdown-items");
  return (
    <div className="dropdown">
      <NavLink className="anchor" to={categoryPath}>
        {({ isActive }) => (
          <h2 className={isActive ? "anchors text-orange-400 " : "anchors"}>
            {categoryName.toUpperCase()}
          </h2>
        )}
      </NavLink>
      <div className={dropdownClass}>
        {routePath.map((route, ind) => (
          <NavLink className="route-item"  key={ind} to={route.path}>
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
