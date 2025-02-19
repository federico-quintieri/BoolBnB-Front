import { useGlobalContext } from "../components/GlobalContext";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const _inputs = {
  city: "",
  bathrooms: 0,
  beds: 0,
  rooms: 0,
};

export function RicercaImmobile() {
  const [immobili, setImmobili] = useState([]);
  const [inputs, setInputs] = useState(_inputs);
  const { apiUrl } = useGlobalContext();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const cityFromUrl = searchParams.get("city");
    if (cityFromUrl) {
      setInputs((prev) => ({ ...prev, city: cityFromUrl }));
      fetchImmobili({ city: cityFromUrl });
    }
  }, []);

  const HandleOnChange = (event) => {
    const { name, value, type } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]:
        type === "number" || name === "tipo" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const HandleOnSubmitGet = (event) => {
    event.preventDefault();
    fetchImmobili(inputs);
  };

  const fetchImmobili = (params) => {
    const filteredInputs = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== "" && value !== 0)
    );

    setSearchParams(filteredInputs);

    axios
      .get(
        `${apiUrl}immobili?${new URLSearchParams(filteredInputs).toString()}`
      )
      .then((response) => {
        setImmobili(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold mb-4 text-left">Ricerca Immobile</h2>
      <form onSubmit={HandleOnSubmitGet} className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="city" className="text-lg font-semibold">
            Città:
          </label>
          <input
            type="text"
            id="city"
            placeholder="Inserisci la città"
            name="city"
            value={inputs.city}
            onChange={HandleOnChange}
            autoComplete="off"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="rooms" className="text-lg font-semibold">
            Numero di stanze:
          </label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            min="0"
            value={inputs.rooms}
            onChange={HandleOnChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="bathrooms" className="text-lg font-semibold">
            Numero di bagni:
          </label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            min="0"
            value={inputs.bathrooms}
            onChange={HandleOnChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="beds" className="text-lg font-semibold">
            Posti letto:
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            min="0"
            value={inputs.beds}
            onChange={HandleOnChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="id_type_real_estate"
            className="block text-sm font-medium text-gray-700"
          >
            Tipo di appartamento
          </label>
          <select
            name="id_type_real_estate"
            value={inputs.id_type_real_estate}
            onChange={HandleOnChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Seleziona il tipo</option>
            <option value="1">Appartamento</option>
            <option value="2">Villa</option>
            <option value="3">Monolocale</option>
            <option value="4">Chalet</option>
            <option value="5">Casale</option>
            <option value="6">Loft</option>
            <option value="7">Bilocale</option>
            <option value="8">Attico</option>
            <option value="9">Residence</option>
            <option value="10">Bungalow</option>
          </select>
        </div>
        <div className="col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Invia
          </button>
        </div>
      </form>
      <div className="mt-4 text-lg font-semibold">
        {immobili.length > 0
          ? `Risultati trovati: ${immobili.length}`
          : "Nessun risultato trovato"}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {immobili &&
          immobili.map((immobile) => (
            <Card
              city={immobile.city}
              description={immobile.description}
              images={immobile.images}
              tipo={immobile.tipo}
              title={immobile.title}
              slug={immobile.slug}
              key={immobile.slug}
              bathrooms={immobile.bathrooms}
              beds={immobile.beds}
              rooms={immobile.rooms}
            />
          ))}
      </div>
    </div>
  );
}
