import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        background: "linear-gradient(to right, #5b86e5, #36d1dc)",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "48px",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Bienvenido a Piedra, Papel o Tijera
      </h1>
      <Link to="/game">
        <button
          className="custom-button"
          style={{
            padding: "12px 24px",
            fontSize: "20px",
            background: "white",
            borderRadius: "8px",
            cursor: "pointer",
            color: "#5b86e5",
            border: "none",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Jugar Ahora
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
