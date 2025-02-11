import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDettagliata from "../components/CardDettagliata";

const apiUrl = import.meta.env.VITE_API_URL;

export function DettaglioImmobile() {
  const [immobile, setImmobile] = useState();
  const { slug } = useParams();

  // Al mount del componente faccio chiamata api specifica ad un id
  useEffect(() => {
    // Faccio chiamata API
    axios.get(`${apiUrl}immobili/${slug}`).then((response) => {
      // Gestisco la risposta avvenuta con successo
      setImmobile(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      {immobile ? (
        <CardDettagliata
          title={immobile.title}
          recensioni={immobile.recensioni}
          address={immobile.address}
          bathrooms={immobile.bathrooms}
          beds={immobile.beds}
          city={immobile.city}
          description={immobile.description}
          
          owner_email={immobile.owner_email}
          owner_name={immobile.owner_name}
          rooms={immobile.rooms}
          square_meters={immobile.square_meters}
          tipo={immobile.tipo}
          key={immobile.slug}
        />
      ) : (
        <h1>Sto caricando</h1>
      )}
    </div>
  );
}
