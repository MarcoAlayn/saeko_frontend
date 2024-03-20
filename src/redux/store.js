import { configureStore } from '@reduxjs/toolkit';

// Importar el reducer
import { rootReducer } from './reducer';

// Crear el store
export const store = configureStore({
  reducer: rootReducer,
  devTools: true, 
});

export default store;