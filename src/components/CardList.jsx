import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const apiUrl = import.meta.env.VITE_API_URL;

export function CardList() {
  const [immobili, setImmobili] = useState([]);

  // Ad avvio componente faccio chiamata API
  useEffect(() => {
    // Faccio chiamata API
    axios.get(`${apiUrl}immobili`).then((response) => {
      // Gestisco la risposta avvenuta con successo
      setImmobili(response.data.data);
      console.log(response.data.data);
    });
  }, []);

// Devi fare un Link che porta ad un indirizzo prendendo lo slug dall'array immobili

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
            slug={immobile.slug}
            key={immobile.slug}
          />
        ))
      ) : (
        <h1>Sto caricando gli immobili</h1>
      )}
    </div>
  );
}
