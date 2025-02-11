import { useGlobalContext } from "../components/GlobalContext";
import { Card } from "../components/Card";
import { useState } from "react";
import axios from "axios";

// Oggetto input base
const _inputs = {
  city: 0,
};

// Pagina RicercaImmobile ha il suo form

export function RicercaImmobile() {
  const [immobili, setImmobili] = useState([]);
  const [inputs, setInputs] = useState(_inputs);
  const { apiUrl } = useGlobalContext();

  // Callback che aggiorna l'oggetto state degli inputs ad ogni onChange
  const HandleOnChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev_Inputs) => ({
      ...prev_Inputs,
      [name]: value,
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
        setImmobili(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  return (
    <div>
      <form onSubmit={HandleOnSubmitGet}>
        {/* <label>
          Tipo di immobile:
          <select name="tipo" value={inputs.tipo} onChange={HandleOnChange}>
            <option value="0">Seleziona</option>
            <option value="1">Villa</option>
            <option value="2">Appartamento</option>
            <option value="3">Attico</option>
          </select>
        </label> */}
        <label>
          Città:
          <input
            type="text"
            placeholder="Inserisci la città"
            name="city"
            value={inputs.city}
            onChange={HandleOnChange}
          />
        </label>
        <button type="submit">Invia</button>
      </form>
      {/* 
        <label>
          Città:
          <input
            type="text"
            placeholder="Inserisci la città"
            name="city"
            value={objContext.city}
            onChange={HandleOnChange}
          />
        </label>

        <label>
          Numero di stanze:
          <input
            type="number"
            name="room"
            min="1"
            value={objContext.room}
            onChange={HandleOnChange}
          />
        </label>

        <label>
          Numero di bagni:
          <input
            type="number"
            name="bathrooms"
            min="1"
            value={objContext.bathrooms}
            onChange={HandleOnChange}
          />
        </label>

        <label>
          Posti letto:
          <input
            type="number"
            name="beds"
            min="1"
            value={objContext.beds}
            onChange={HandleOnChange}
          />
        </label>
        <button type="submit">Invia</button>
      </form> */}

      {immobili &&
        immobili.map((immobile) => (
          <Card
            city={immobile.city}
            description={immobile.description}
            images={immobile.image}
            tipo={immobile.tipo}
            title={immobile.title}
            key={immobile.slug}
          />
        ))}
    </div>
  );
}
