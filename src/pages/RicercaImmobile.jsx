import { useGlobalContext } from "../components/GlobalContext";
import Card from "../components/Card";
import { useState } from "react";
import axios from "axios";

// Oggetto input base
const _inputs = {
  // tipo: 0,
  city: "",
  bathrooms: 0,
  beds: 0,
  rooms: 0,
};

// Pagina RicercaImmobile ha il suo form

export function RicercaImmobile() {
  const [immobili, setImmobili] = useState([]);
  const [inputs, setInputs] = useState(_inputs);
  const { apiUrl } = useGlobalContext();

  // Callback che aggiorna l'oggetto state degli inputs ad ogni onChange
  const HandleOnChange = (event) => {
    const { name, value, type } = event.target;

    setInputs((prev_Inputs) => ({
      ...prev_Inputs,
      [name]:
        type === "number" || name === "tipo" ? parseInt(value, 10) || 0 : value,
    }));
  };

  // Callback da passare all'OnSubmit che fa chiamata GET
  const HandleOnSubmitGet = (event) => {
    event.preventDefault();

    // Converto objContext in parametri di query
    const queryParams = new URLSearchParams(inputs).toString();

    // Faccio chiamata API con parametri di query
    axios
      .get(`${apiUrl}immobili?${queryParams}`)
      .then((response) => {
        setImmobili(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };
  console.log(inputs);
  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={HandleOnSubmitGet} className="space-y-4">
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
            min="1"
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
            min="1"
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
            min="1"
            value={inputs.beds}
            onChange={HandleOnChange}
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Invia
          </button>
        </div>
      </form>

      <div className="mt-8">
        {immobili &&
          immobili.map((immobile) => (
            <Card
              city={immobile.city}
              description={immobile.description}
              images={immobile.image}
              tipo={immobile.tipo}
              title={immobile.title}
              slug={immobile.slug}
              key={immobile.slug}
            />
          ))}
      </div>
    </div>
  );
}
