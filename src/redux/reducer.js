// Importamos nuestras acciones
import {
  ADD_PLAYER_POINT,
  ADD_COMPUTER_POINT,
  PLAYER_SELECTION,
  COMPUTER_SELECTION,
  RESET_GAME,
} from "./actions";

// Define el estado inicial del reducer
const initialState = {
  computerPoints: 0,
  playerPoints: 0,
  playerSelection: null,
  computerSelection: null,
};

// Define el reducer
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PLAYER_POINT:
      return {
        ...state,
        playerPoints: state.playerPoints + 1,
      };
    case ADD_COMPUTER_POINT:
      return {
        ...state,
        computerPoints: state.computerPoints + 1,
      };
    case PLAYER_SELECTION:
      return {
        ...state,
        playerSelection: action.payload,
      };
    case COMPUTER_SELECTION:
      return {
        ...state,
        computerSelection: action.payload,
      };
    case RESET_GAME:
      return {
        ...state,
        playerPoints: 0,
        computerPoints: 0,
        playerSelection: null,
        computerSelection: null,
      };
    default:
      return state;
  }
}
