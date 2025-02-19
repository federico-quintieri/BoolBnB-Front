import { useState, useEffect } from "react";
import axios from "axios";

const recensioneStart = {
  name: "",
  comment: "",
  email: "",
  vote: "",
  days_of_stay: "",
  id_real_estate: 0,
};

function Recensioni({ recensioni, idRealEstate, apiUrl, setImmobile }) {
  const [listaRecensioni, setListaRecensioni] = useState(recensioni);
  const [addReview, setAddReview] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (recensioni !== undefined) {
      const sortedRecensioni = recensioni.sort(
        (a, b) => new Date(b.created_in) - new Date(a.created_in)
      );
      setListaRecensioni(sortedRecensioni);
    }
  }, [recensioni]);

  const handleAddReview = (event) => {
    event.preventDefault(); // Evita il ricaricamento della pagina

    const formData = new FormData(event.target);
    const newReview = {
      name: formData.get("name"),
      email: formData.get("email"),
      comment: formData.get("comment"),
      vote: parseInt(formData.get("vote")),
      days_of_stay: parseInt(formData.get("days_of_stay")),
      created_in: new Date().toISOString(),
      id_real_estate: idRealEstate,
    };

    axios
      .post(`${apiUrl}immobili/review`, newReview)
      .then(() => {
        setImmobile((prev) => ({
          ...prev,
          recensioni: prev.recensioni
            ? [...prev.recensioni, newReview]
            : [newReview],
        }));

        setAddReview(false); // Chiudi il form dopo l'invio

        // Imposta il messaggio di successo
        setSuccessMessage("Recensione inviata con successo!");

        // Nascondi il messaggio dopo 3 secondi
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((error) =>
        console.error("Errore nell'aggiunta della recensione:", error)
      );

    event.target.reset(); // Reset automatico del form
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Aggiungi una recensione
      </h2>

      <button
        onClick={() => setAddReview(!addReview)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-2"
      >
        {addReview ? "Annulla" : "Apri form"}
      </button>

      {successMessage && (
        <div className="p-4 bg-green-200 text-green-800 rounded-md mb-4 mt-2">
          {successMessage}
        </div>
      )}

      {addReview && (
        <form onSubmit={handleAddReview} className="grid grid-cols-1 gap-4 mt-4">
          <label className="block">
            <span className="text-gray-700">Nome:</span>
            <input
              type="text"
              name="name"
              required
              defaultValue=""
              autoComplete="off"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              required
              defaultValue=""
              autoComplete="off"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Commento:</span>
            <textarea
              name="comment"
              required
              defaultValue=""
              minLength={8}
              autoComplete="off"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-700">Voto (1-5):</span>
              <input
                type="number"
                name="vote"
                required
                min="1"
                max="5"
                defaultValue=""
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>

            <label className="block">
              <span className="text-gray-700">Giorni di soggiorno:</span>
              <input
                type="number"
                name="days_of_stay"
                required
                min="1"
                defaultValue=""
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mt-4"
          >
            Invia Recensione
          </button>
        </form>
      )}

      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Recensioni</h2>

      {listaRecensioni.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {listaRecensioni.map((r, index) => {
            const reviewDate = new Date(r.created_in);
            const formattedDate = reviewDate.toLocaleDateString("it-IT");

            return (
              <li
                key={r.id || `review-${index}`}
                className="p-4 bg-gray-100 rounded-lg shadow"
              >
                <p className="font-semibold text-lg">{r.name}</p>
                <p className="text-gray-700">{r.comment}</p>
                <p className="text-sm text-gray-600 mt-1">
                  Voto: <span className="font-bold">{r.vote} ⭐</span> | Giorni
                  di soggiorno: {r.days_of_stay} | Data: {formattedDate}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-4 text-gray-600">Ancora nessuna recensione.</p>
      )}
    </div>
  );
}

export default Recensioni;
