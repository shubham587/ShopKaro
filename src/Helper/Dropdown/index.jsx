import React from "react";
import { Link } from "react-router-dom";
import "./style.sass";

const Dropdown = ({ categoryName, categoryPath, routePath }) => {
  return (
    <div className="dropdown">
      <Link className="anchor" to={categoryPath}>
        {(categoryName).toUpperCase()}
      </Link>
      <div className="dropdown-items">
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
