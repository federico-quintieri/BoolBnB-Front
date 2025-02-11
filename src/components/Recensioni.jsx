import { useState } from "react";
import axios from "axios";

const recensioneStart = {
  name: "",
  comment: "",
  email: "",
  vote: 0,
  days_of_stay: 0,
  id_real_estate: 0,
};

function Recensioni({ recensioni, idRealEstate, apiUrl, setImmobile }) {
  const [recensione, setRecensione] = useState(recensioneStart);

  // Funzione per gestire il cambio degli input
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setRecensione((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(recensioni);
  // Funzione per aggiungere una recensione
  const handleAddReview = () => {
    axios
      .post(`${apiUrl}immobili/review`, {
        ...recensione,
        id_real_estate: idRealEstate,
      })
      .then(() => {
        setImmobile((prev) => ({
          ...prev,
          recensioni: prev.recensioni
            ? [...prev.recensioni, recensione]
            : [recensione],
        }));

        setRecensione(recensioneStart); // Reset dei campi dopo l'invio
      })
      .catch((error) =>
        console.error("Errore nell'aggiunta della recensione:", error)
      );
  };

  // Funzione per rimuovere una recensione
  const handleRemoveReview = (id) => {
    axios
      .delete(`${apiUrl}immobili/${idRealEstate}/recensioni/${id}`)
      .then(() => {
        setImmobile((prev) => ({
          ...prev,
          recensioni: prev.recensioni.filter((r) => r.id !== id),
        }));
      })
      .catch((error) =>
        console.error("Errore nella rimozione della recensione:", error)
      );
  };

  return (
    <div>
      <h2>Aggiungi una recensione</h2>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={recensione.name}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={recensione.email}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Commento:
        <textarea
          name="comment"
          value={recensione.comment}
          onChange={handleOnChange}
        />
      </label>
      <label>
        Voto:
        <input
          type="number"
          name="vote"
          value={recensione.vote}
          onChange={handleOnChange}
          min="0"
          max="5"
        />
      </label>
      <label>
        Giorni di soggiorno:
        <input
          type="number"
          name="days_of_stay"
          value={recensione.days_of_stay}
          onChange={handleOnChange}
        />
      </label>
      <button onClick={handleAddReview}>Invia</button>

      <h2>Recensioni</h2>
      {recensioni.length > 0 ? (
        <ul>
          {recensioni.map((r, index) => (
            <li key={r.id || `review-${index}`}>
              <p>
                <strong>{r.recensore}</strong>: {r.commento}
              </p>
              <p>
                Voto: {r.voto} ⭐ | Giorni di soggiorno: {r.giorni_permanenza}
              </p>
              <button onClick={() => handleRemoveReview(r.id)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ancora nessuna recensione.</p>
      )}
    </div>
  );
}

export default Recensioni;
