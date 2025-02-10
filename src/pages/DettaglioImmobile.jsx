import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardDettagliata } from "../components/CardDettagliata";

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

  return <div>{immobile ? <CardDettagliata title={immobile.title} /> : <h1>Sto caricando</h1>}</div>;
}
