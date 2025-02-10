// Importo i componenti per creare le rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importo le pagine per creare le rotte
import { CreaImmobile } from "./pages/CreaImmobile";
import { DettaglioImmobile } from "./pages/DettaglioImmobile";
import { Homepage } from "./pages/Homepage";
import { RicercaImmobile } from "./pages/RicercaImmobile";

// Importo layout sempre renderizzato
import { AppLayout } from "./components/AppLayout";

// Importo il global context
import { GlobalContextProvider } from "./components/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route
              path="dettagli_immobile/:slug"
              element={<DettaglioImmobile />}
            />
            <Route path="inserisci_immobile" element={<CreaImmobile />} />
            <Route path="ricerca_immobile" element={<RicercaImmobile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
}

export default App;
