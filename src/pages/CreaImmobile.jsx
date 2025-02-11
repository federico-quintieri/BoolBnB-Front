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
  //console.log(inputs);

  // Prendo url base api da context
  const { apiUrl } = useGlobalContext();
  //console.log(apiUrl);

  // Callback da passare all'OnSubmit che fa chiamata POST
  const HandleOnSubmitGet = (event) => {
    event.preventDefault();
    // In questa funzione devo gestire la chiamata POST
    axios
      .post(`${apiUrl}immobili`, inputs)
      .then((response) => {
        //console.log(response);
        setIsError(1);
      })
      .catch(function (error) {
        //console.log(error);
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
    <div>
      <form onSubmit={HandleOnSubmitGet}>
        <input
          type="email"
          name="owner_email"
          value={inputs.owner_email}
          onChange={HandleOnChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="owner_name"
          value={inputs.owner_name}
          onChange={HandleOnChange}
          placeholder="Nome Proprietario"
          required
        />
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={HandleOnChange}
          placeholder="Titolo"
          required
        />
        <textarea
          name="description"
          value={inputs.description}
          onChange={HandleOnChange}
          placeholder="Descrizione"
          required
        />
        <input
          type="number"
          name="rooms"
          value={inputs.rooms}
          onChange={HandleOnChange}
          placeholder="Stanze"
          required
        />
        <input
          type="number"
          name="beds"
          value={inputs.beds}
          onChange={HandleOnChange}
          placeholder="Letti"
          required
        />
        <input
          type="number"
          name="bathrooms"
          value={inputs.bathrooms}
          onChange={HandleOnChange}
          placeholder="Bagni"
          required
        />
        <input
          type="number"
          name="square_meters"
          value={inputs.square_meters}
          onChange={HandleOnChange}
          placeholder="Metri Quadri"
          required
        />
        <input
          type="text"
          name="city"
          value={inputs.city}
          onChange={HandleOnChange}
          placeholder="Città"
          required
        />
        <input
          type="text"
          name="address"
          value={inputs.address}
          onChange={HandleOnChange}
          placeholder="Indirizzo"
          required
        />
        <input
          type="text"
          name="images"
          value={inputs.images}
          onChange={HandleOnChange}
          placeholder="URL Immagini"
          required
        />
        <input
          type="number"
          name="id_type_real_estate"
          value={inputs.id_type_real_estate}
          onChange={HandleOnChange}
          placeholder="ID Tipo Immobile"
          required
        />
        <button type="submit">Crea Immobile</button>
      </form>
      {error === 1 && <h1>Ho inserito il tuo immobile</h1>}
      {error === -1 && <h1>Errore inserimento immobile</h1>}
    </div>
  );
}
