import React from "react";
import "./button.css";

const Button = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-button"
      style={{
        color: "white",
        height: "100px",
        width: "100px",
        borderRadius: "50px",
        border: "none",
        cursor: "pointer",
        background:
          "linear-gradient(45deg, rgb(179 220 237 / 0%) 0%, rgba(41, 184, 229, 1) 50%, rgb(188 224 238 / 0%) 100%)",
        boxShadow: "0 3px 20px -11px black",
      }}
    >
      {icon}
    </button>
  );
};

export default Button;
