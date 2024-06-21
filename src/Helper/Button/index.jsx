import React from "react";
import classNames from "classnames";

const Button = (
  {children,
  onClick,
  type = "button",
  // variant = "primary",
  disabled = false,
  className = "",
  ...props}
) => {
  let btnDefault = "px-4 py-2 focus:outline-none";
  let btnClass = classNames(btnDefault, className);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={btnClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
