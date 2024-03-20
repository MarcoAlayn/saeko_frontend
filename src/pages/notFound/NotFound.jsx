import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f0f0f0",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        ¡Página no encontrada!
      </h1>
      <p
        style={{
          fontSize: "24px",
          color: "#666",
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Lo sentimos, la página que estás buscando no pudo ser encontrada. Por
        favor, verifica la URL e intenta de nuevo.
      </p>
    </div>
  );
};

export default NotFound;
