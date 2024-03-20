import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./game.css";

// Importamos los hooks de react-redux
import { useSelector, useDispatch } from "react-redux";

// Importamos las acciones
import {
  addComputerPoint,
  addPlayerPoint,
  computerSelection,
  playerSelection,
  resetGame,
} from "../../redux/actions";

const Game = () => {
  // Creamos las constantes para usar los hooks
  const dispatch = useDispatch();
  const computerPoints = useSelector((state) => state.computerPoints);
  const playerPoints = useSelector((state) => state.playerPoints);
  const playerSelect = useSelector((state) => state.playerSelection);
  const computerSelect = useSelector((state) => state.computerSelection);
  const [gameResult, setGameResult] = useState(null);

  const player = (option) => {
    dispatch(playerSelection(option));
  };

  const computer = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomOption = options[randomIndex];
    dispatch(computerSelection(randomOption));
  };

  const handlerGameResult = (result) => {
    setTimeout(() => {
      setGameResult(result);
    }, 1000);
  };

  useEffect(() => {
    if (playerSelect !== null && computerSelect !== null) {
      // Comparar selecciones para determinar el resultado
      if (playerSelect === "rock" && computerSelect === "scissors") {
        dispatch(addPlayerPoint()); // Suma un punto al jugador
        handlerGameResult("Ganaste");
      } else if (playerSelect === "paper" && computerSelect === "rock") {
        dispatch(addPlayerPoint()); // Suma un punto al jugador
        handlerGameResult("Ganaste");
      } else if (playerSelect === "scissors" && computerSelect === "paper") {
        dispatch(addPlayerPoint()); // Suma un punto al jugador
        handlerGameResult("Ganaste");
      } else if (playerSelect === "rock" && computerSelect === "paper") {
        dispatch(addComputerPoint()); // Suma un punto a la computadora
        handlerGameResult("Perdiste");
      } else if (playerSelect === "paper" && computerSelect === "scissors") {
        dispatch(addComputerPoint()); // Suma un punto a la computadora
        handlerGameResult("Perdiste");
      } else if (playerSelect === "scissors" && computerSelect === "rock") {
        dispatch(addComputerPoint()); // Suma un punto a la computadora
        handlerGameResult("Perdiste");
      } else if (playerSelect === computerSelect) {
        handlerGameResult("Empate");
      }
    }

  }, [playerSelect, computerSelect]); // Se ejecuta cada vez que playerSelect o computerSelect cambian

  useEffect(() => {
    if (playerSelect !== null) {
      computer(); // Llama a la función computer cuando el jugador haya seleccionado una opción
    }

    // Limpiar el temporizador antes de establecer uno nuevo
    const timer = setTimeout(() => {
      dispatch(playerSelection(null)); // Resetea la selección del jugador
      dispatch(computerSelection(null)); // Resetea la selección de la computadora
      setGameResult(null); // Resetea el resultado del juego
    }, 1000); // Tiempo de espera de 1 segundo

    // Limpiar el temporizador cuando el componente se desmonte o el usuario realice otra selección
    return () => clearTimeout(timer);
  }, [playerSelect]); // Se ejecuta cada vez que playerSelect cambia

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <header>
        <h1>Piedra, Papel o Tijera</h1>
      </header>
      <main>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "6px",
              height: "26px",
              fontSize: "30px",
            }}
          >
            <h3
              style={{
                background:
                  "linear-gradient(to left, rgb(179, 220, 237) 0%, rgb(41, 184, 229) 0%, rgb(188, 224, 238) 36%, rgb(255, 255, 255) 69%, rgb(255, 255, 255) 100%)",
                width: "75px",
                borderRadius: "0px 8px 8px 0px",
                paddingRight: "10px",
                textAlign: "right",
              }}
            >
              {playerPoints}
            </h3>
            <h3> - </h3>
            <h3
              style={{
                background:
                  "linear-gradient(to right, rgb(179, 220, 237) 0%, rgb(41, 184, 229) 0%, rgb(188, 224, 238) 36%, rgb(255, 255, 255) 69%, rgb(255, 255, 255) 100%)",
                width: "75px",
                borderRadius: "8px 0px 0px 8px",
                paddingLeft: "10px",
              }}
            >
              {computerPoints}
            </h3>
          </div>
          <h4 style={{ height: "10px" }}>Marcador</h4>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "44px",
          }}
        >
          {gameResult === null ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Tú</h2>
                <Card
                  isComputer={false}
                  optionSelected={playerSelect}
                  handleSelection={player}
                />
              </div>
              <div
                style={{
                  height: "500px",
                  width: "4px",
                  background:
                    "linear-gradient(to bottom, rgba(179,220,237,1) 0%, rgba(41,184,229,1) 50%, rgba(188,224,238,1) 100%)",
                  borderRadius: "100%",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Computadora</h2>
                <Card isComputer={true} optionSelected={computerSelect} />
              </div>
            </>
          ) : (
            <h1
              style={{
                width: "500px",
                height: "417px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                animation: `${gameResult ? "shake 0.5s infinite" : ""}`,
                fontSize: "50px",
                color: `${
                  (gameResult === "Ganaste" && "green") ||
                  (gameResult === "Perdiste" && "red") ||
                  "black"
                }`,
              }}
            >
              {gameResult}
            </h1>
          )}
        </section>
      </main>
      <footer>
        <button
          className="custom-button"
          style={{
            padding: "10px 20px",
            fontSize: "20px",
            background:
              "linear-gradient(rgb(179 220 237 / 52%) 0%, rgb(41, 184, 229) 50%, rgb(188 224 238) 100%)",
            borderRadius: "8px",
            cursor: "pointer",
            color: "white",
            border: "none",
            boxShadow: "black 0px 3px 20px -11px",
          }}
          onClick={() => dispatch(resetGame())}
        >
          Reiniciar
        </button>
      </footer>
    </div>
  );
};

export default Game;
