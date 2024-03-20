import React from "react";
import Button from "../button/Button";
import Paper from "../../assets/icons/Paper";
import Scissors from "../../assets/icons/Scissors";
import Rock from "../../assets/icons/Rock";

const Card = ({ isComputer, optionSelected, handleSelection }) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isComputer ? "row-reverse" : "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100px",
          height: "100%",
          rowGap: "10px",
        }}
      >
        <Button
          icon={<Rock isButton={true} />}
          onClick={handleSelection && (() => handleSelection("rock"))}
        />
        <Button
          icon={<Paper isButton={true} />}
          onClick={handleSelection && (() => handleSelection("paper"))}
        />
        <Button
          icon={<Scissors isButton={true} />}
          onClick={handleSelection && (() => handleSelection("scissors"))}
        />
      </div>
      <div
        style={{
          width: "320px",
          height: "320px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(optionSelected === "rock" && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rock isButton={false} />
            <h3>Piedra</h3>
          </div>
        )) ||
          (optionSelected === "paper" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper isButton={false} />
              <h3>Papel</h3>
            </div>
          )) ||
          (optionSelected === "scissors" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Scissors isButton={false} />
              <h3>Tijeras</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
