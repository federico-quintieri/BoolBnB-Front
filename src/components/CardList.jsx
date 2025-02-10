import { Card } from "../components/Card";
import axios from "axios";
import { use } from "react";
import { useState, useEffect } from "react";

export function CardList() {
  const [immobili, setImmobili] = useState([]);

  // Ad avvio componente faccio chiamata API
  useEffect(() => {
    // Faccio chiamata API
    axios.get("http://localhost:3000/immobili").then((response) => {
      // Gestisco la risposta avvenuta con successo
      setImmobili(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {immobili ? (
        immobili.map((immobile) => (
          <Card
            city={immobile.city}
            description={immobile.description}
            images={immobile.images}
            tipo={immobile.tipo}
            title={immobile.title}
            key={immobile.slug}
          />
        ))
      ) : (
        <h1>Sto caricando gli immobili</h1>
      )}
    </div>
  );
}
