import { createContext, useState, useContext } from "react";

// Faccio context
const GlobalContext = createContext();

// Url base per fare chiamate API
const apiUrl = import.meta.env.VITE_API_URL;

// Componente per fornire lo stato ai figli
export function GlobalContextProvider({ children }) {
  // Oggetto che rende disponibile sia objContext che la funzione per modificarlo
  const _Context = {
    apiUrl,
  };

  return (
    <GlobalContext.Provider value={_Context}>{children}</GlobalContext.Provider>
  );
}

// Funzione per utilizzare il context
export function useGlobalContext() {
  const objFromContext = useContext(GlobalContext);
  return objFromContext;
}
