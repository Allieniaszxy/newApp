import React from "react";

const Button = ({
  title,
  icon,
  onClick,
  className = "",
  bgColor,
  color,
  padding,
  borderColor,
  margin,
  type = "button",
}) => {
  const style = {
    backgroundColor: bgColor,
    color: color,
    padding,
    margin,
    ...(borderColor && { border: `1px solid ${borderColor}` }),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`flex items-center gap-2 rounded-md ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{title}</span>
    </button>
  );
};

export default Button;
