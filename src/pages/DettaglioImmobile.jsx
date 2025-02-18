import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDettagliata from "../components/CardDettagliata";
import { useGlobalContext } from "../components/GlobalContext";
import Recensioni from "../components/Recensioni";

export function DettaglioImmobile() {
  const [immobile, setImmobile] = useState(null);
  const { slug } = useParams();
  const { apiUrl } = useGlobalContext();
  console.log(immobile);
  useEffect(() => {
    axios.get(`${apiUrl}immobili/${slug}`).then((response) => {
      setImmobile(response.data);
    });
  }, []);

  return (
    <div>
      {immobile ? (
        <>
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
            images={immobile.images}
          />
          <Recensioni
            recensioni={immobile.recensioni}
            idRealEstate={immobile.id}
            apiUrl={apiUrl}
            setImmobile={setImmobile}
          />
        </>
      ) : (
        <h1>Sto caricando...</h1>
      )}
    </div>
  );
}
