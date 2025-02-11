import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDettagliata from "../components/CardDettagliata";
import { useGlobalContext } from "../components/GlobalContext";

// Oggetto iniziale per i dati della recensione
const recensioneStart = {
  name: "",
  comment: "",
  vote: 0,
  days_of_stay: 0,
};

// Componente pagina che mostra dettagli immobile
export function DettaglioImmobile() {
  const [immobile, setImmobile] = useState(null); // Stato per contenere dati dell'immobile
  const [recensione, setRecensione] = useState(recensioneStart); // Stato per la nuova recensione
  const { slug } = useParams(); // Prendo slug da URL
  const { apiUrl } = useGlobalContext(); // Prendo URL base da API

  // Al mount del componente faccio chiamata API per ottenere i dettagli dell'immobile
  useEffect(() => {
    axios.get(`${apiUrl}immobili/${slug}`).then((response) => {
      setImmobile(response.data);
      console.log(response.data);
    });
  }, []);

  // Funzione per gestire il cambio degli input
  const HandleOnChange = (event) => {
    const { name, value } = event.target;
    setRecensione((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Funzione per aggiungere una recensione
  const handleAddReview = () => {
    axios
      .post(`${apiUrl}immobili/${slug}/recensioni`, recensione)
      .then(() => {
        setImmobile((prev) => ({
          ...prev,
          recensioni: [...prev.recensioni, recensione],
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
      .delete(`${apiUrl}immobili/${slug}/recensioni/${id}`)
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
          />

          {/* Form per aggiungere una recensione */}
          <div>
            <h2>Aggiungi una recensione</h2>
            <label htmlFor="">
              Inserisci il tuo nome
              <input
                type="text"
                name="name"
                value={recensione.name}
                onChange={HandleOnChange}
                placeholder="Nome"
              />
            </label>
            <label htmlFor="">
              Com'è stata la tua esperienza?
              <textarea
                name="comment"
                value={recensione.comment}
                onChange={HandleOnChange}
                placeholder="Scrivi un commento..."
              />
            </label>
            <label htmlFor="">
              Dai un voto
              <input
                type="number"
                name="vote"
                value={recensione.vote}
                onChange={HandleOnChange}
                placeholder="Voto (0-5)"
                min="0"
                max="5"
              />
            </label>
            <label htmlFor="">
              Quanto hai soggiornato?
              <input
                type="number"
                name="days_of_stay"
                value={recensione.days_of_stay}
                onChange={HandleOnChange}
                placeholder="Giorni di soggiorno"
              />
            </label>
            <button onClick={handleAddReview}>Invia</button>
          </div>

          {/* Lista recensioni con opzione di rimozione */}
          <div>
            <h2>Recensioni</h2>
            {immobile.recensioni.length > 0 ? (
              <ul>
                {immobile.recensioni.map((r) => (
                  <li key={r.id}>
                    <p>
                      <strong>{r.name}</strong>: {r.comment}
                    </p>
                    <p>
                      Voto: {r.vote} ⭐ | Giorni di soggiorno: {r.days_of_stay}
                    </p>
                    <button onClick={() => handleRemoveReview(r.id)}>❌</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Ancora nessuna recensione.</p>
            )}
          </div>
        </>
      ) : (
        <h1>Sto caricando</h1>
      )}
    </div>
  );
}
