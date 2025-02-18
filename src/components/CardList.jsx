import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../components/GlobalContext";

export function CardList() {
  const [immobili, setImmobili] = useState([]);

  const { apiUrl } = useGlobalContext();

  useEffect(() => {
    axios.get(`${apiUrl}immobili`).then((response) => {
      setImmobili(response.data.data);
      //console.log(response.data.data[7].images);
    });
  }, []);

  return (
    <div className="container flex justify-center mx-auto p-4">
      {immobili.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {immobili.map((immobile) => (
            <Card
              key={immobile.slug}
              city={immobile.city}
              description={immobile.description}
              images={immobile.images}
              tipo={immobile.tipo}
              title={immobile.title}
              slug={immobile.slug}
            />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-xl font-semibold">
          Sto caricando gli immobili...
        </h1>
      )}
    </div>
  );
}
