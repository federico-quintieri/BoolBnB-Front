import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../components/GlobalContext";

// Oggetto di partenza per lo state
const inputsStart = {
  owner_email: "",
  owner_name: "",
  title: "",
  description: "",
  rooms: 0,
  beds: 0,
  bathrooms: 0,
  square_meters: 0,
  city: "",
  address: "",
  images: "",
  id_type_real_estate: 0,
};

// Pagina CreaImmobile ha il suo form
export function CreaImmobile() {
  const [inputs, setInputs] = useState(inputsStart);
  const [error, setIsError] = useState(0);

  // Prendo url base api da context
  const { apiUrl } = useGlobalContext();

  // Callback da passare all'OnSubmit che fa chiamata POST
  const HandleOnSubmitGet = (event) => {
    event.preventDefault();
    // In questa funzione devo gestire la chiamata POST
    axios
      .post(`${apiUrl}immobili`, inputs)
      .then((response) => {
        setIsError(1);
      })
      .catch(function (error) {
        setIsError(-1);
      });
    setInputs(inputsStart);
  };

  // Handle onChange degli input che mi aggiorna l'oggetto state inputs
  const HandleOnChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Crea Nuovo Immobile
      </h2>

      <form onSubmit={HandleOnSubmitGet} className="space-y-4">
        <div>
          <label htmlFor="owner_email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="owner_email"
            value={inputs.owner_email}
            onChange={HandleOnChange}
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="owner_name" className="block text-sm font-medium text-gray-700">
            Nome Proprietario
          </label>
          <input
            type="text"
            name="owner_name"
            value={inputs.owner_name}
            onChange={HandleOnChange}
            placeholder="Nome Proprietario"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titolo
          </label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={HandleOnChange}
            placeholder="Titolo"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Descrizione
          </label>
          <textarea
            name="description"
            value={inputs.description}
            onChange={HandleOnChange}
            placeholder="Descrizione"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
              Stanze
            </label>
            <input
              type="number"
              name="rooms"
              value={inputs.rooms}
              onChange={HandleOnChange}
              placeholder="Stanze"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="beds" className="block text-sm font-medium text-gray-700">
              Letti
            </label>
            <input
              type="number"
              name="beds"
              value={inputs.beds}
              onChange={HandleOnChange}
              placeholder="Letti"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700">
              Bagni
            </label>
            <input
              type="number"
              name="bathrooms"
              value={inputs.bathrooms}
              onChange={HandleOnChange}
              placeholder="Bagni"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="square_meters" className="block text-sm font-medium text-gray-700">
              Metri Quadri
            </label>
            <input
              type="number"
              name="square_meters"
              value={inputs.square_meters}
              onChange={HandleOnChange}
              placeholder="Metri Quadri"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            Città
          </label>
          <input
            type="text"
            name="city"
            value={inputs.city}
            onChange={HandleOnChange}
            placeholder="Città"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Indirizzo
          </label>
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={HandleOnChange}
            placeholder="Indirizzo"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium text-gray-700">
            URL Immagini
          </label>
          <input
            type="text"
            name="images"
            value={inputs.images}
            onChange={HandleOnChange}
            placeholder="URL Immagini"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="id_type_real_estate" className="block text-sm font-medium text-gray-700">
            ID Tipo Immobile
          </label>
          <input
            type="number"
            name="id_type_real_estate"
            value={inputs.id_type_real_estate}
            onChange={HandleOnChange}
            placeholder="ID Tipo Immobile"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md mt-4"
        >
          Crea Immobile
        </button>
      </form>

      {error === 1 && (
        <h1 className="text-green-600 mt-4">
          Ho inserito il tuo immobile con successo!
        </h1>
      )}
      {error === -1 && (
        <h1 className="text-red-600 mt-4">
          Errore nell'inserimento dell'immobile.
        </h1>
      )}
    </div>
  );
}
