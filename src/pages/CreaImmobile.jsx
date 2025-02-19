import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../components/GlobalContext";

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
  images: [],
  id_type_real_estate: 0,
};

export function CreaImmobile() {
  const [inputs, setInputs] = useState(inputsStart);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { apiUrl } = useGlobalContext();

  const HandleOnSubmitPost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    for (const key in inputs) {
      if (key === "images") {
        inputs[key].forEach((file, index) => {
          formData.append(`images`, file);
        });
      } else {
        formData.append(key, inputs[key]);
      }
    }

    try {
      const response = await axios.post(`${apiUrl}immobili`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
      setError(null);
      setInputs(inputsStart);
    } catch (err) {
      setError(
        err.response?.data?.message || "Errore nell'inserimento dell'immobile."
      );
      setSuccess(false);
    }
  };

  const HandleOnChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      const selectedFiles = Array.from(files);
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: selectedFiles,
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Crea Nuovo Immobile
      </h2>
      <form onSubmit={HandleOnSubmitPost} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="owner_email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="owner_email"
              value={inputs.owner_email}
              onChange={HandleOnChange}
              placeholder="Email"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="owner_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              name="owner_name"
              value={inputs.owner_name}
              onChange={HandleOnChange}
              placeholder="Nome"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Titolo
          </label>
          <input
            type="text"
            name="title"
            value={inputs.title}
            onChange={HandleOnChange}
            placeholder="Titolo"
            autoComplete="off"
            minLength="4"
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-gray-700"
            >
              Stanze
            </label>
            <input
              type="number"
              name="rooms"
              value={inputs.rooms}
              onChange={HandleOnChange}
              placeholder="Stanze"
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="beds"
              className="block text-sm font-medium text-gray-700"
            >
              Letti
            </label>
            <input
              type="number"
              name="beds"
              value={inputs.beds}
              onChange={HandleOnChange}
              placeholder="Letti"
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="bathrooms"
              className="block text-sm font-medium text-gray-700"
            >
              Bagni
            </label>
            <input
              type="number"
              name="bathrooms"
              value={inputs.bathrooms}
              onChange={HandleOnChange}
              placeholder="Bagni"
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="square_meters"
              className="block text-sm font-medium text-gray-700"
            >
              M²
            </label>
            <input
              type="number"
              name="square_meters"
              value={inputs.square_meters}
              onChange={HandleOnChange}
              placeholder="M²"
              min="9"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700"
            >
              Carica immagini
            </label>
            <input
              type="file"
              name="images"
              multiple
              onChange={HandleOnChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
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
              required
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
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              Città
            </label>
            <input
              type="text"
              name="city"
              value={inputs.city}
              onChange={HandleOnChange}
              placeholder="Città"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Indirizzo
            </label>
            <input
              type="text"
              name="address"
              value={inputs.address}
              onChange={HandleOnChange}
              placeholder="Indirizzo"
              autoComplete="off"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Descrizione
          </label>
          <textarea
            name="description"
            value={inputs.description}
            onChange={HandleOnChange}
            placeholder="Descrizione dell'immobile"
            autoComplete="off"
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

      {success && (
        <h1 className="text-green-600 mt-4">
          Ho inserito il tuo immobile con successo!
        </h1>
      )}
      {error && <h1 className="text-red-600 mt-4">{error}</h1>}
    </div>
  );
}
