// Definimos los tipos de acciones
export const ADD_PLAYER_POINT = "ADD_PLAYER_POINT";
export const ADD_COMPUTER_POINT = "ADD_COMPUTER_POINT";
export const PLAYER_SELECTION = "PLAYER_SELECTION";
export const COMPUTER_SELECTION = "COMPUTER_SELECTION";
export const RESET_GAME = "RESET_GAME";

// Definimos las acciones

export const addPlayerPoint = () => {
  return { type: ADD_PLAYER_POINT };
};

export const addComputerPoint = () => {
  return { type: ADD_COMPUTER_POINT };
};

export const playerSelection = (option) => {
  return { type: PLAYER_SELECTION, payload: option };
};

export const computerSelection = (option) => {
  return { type: COMPUTER_SELECTION, payload: option };
};

export const resetGame = () => {
  return { type: RESET_GAME };
};
