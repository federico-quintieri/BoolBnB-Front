import { createContext, useState, useContext } from "react";

// Faccio context
const GlobalContext = createContext();

// Componente per fornire lo stato ai figli
export function GlobalContextProvider({children}) {
  const [test, setTest] = useState("Ciao zio vengo dal context");

  return (
    <GlobalContext.Provider value={test}>{children}</GlobalContext.Provider>
  );
}

// Funzione per utilizzare il context
export function useGlobalContext() {
  const objFromContext = useContext(GlobalContext);
  return objFromContext;
}
