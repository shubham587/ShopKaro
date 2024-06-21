import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";
import classNames from "classnames";

const Dropdown = ({ categoryName, categoryPath, routePath, className }) => {
  let dropdownClass = classNames(className, "dropdown-items")
  return (
    <div className="dropdown">
      <Link className="anchor" to={categoryPath}>
        {(categoryName).toUpperCase()}
      </Link>
      <div className={dropdownClass}>
        {routePath.map((route, ind) => (
          <Link className="route-item" key={ind} to={route.path}>
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
