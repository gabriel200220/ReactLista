import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";

const store = configureStore({
  // Trocou o rootReducer, pelo persistedReducer
  reducer: rootReducer,
});

// Exportando o Roostate para poder ler de fora
export type RootState = ReturnType<typeof store.getState>;

// Export um Disparador
export type AppDispatch = typeof store.dispatch;

export { store };