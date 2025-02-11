import { use } from "react";
import { useNavigate } from "react-router-dom";

function CardDettagliata({
  address,
  bathrooms,
  beds,
  city,
  description,
  images,
  owner_email,
  owner_name,
  rooms,
  square_meters,
  tipo,
  title,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{title}</h1>
      <p>Tipo: {tipo}</p>
      <p>
        Indirizzo: {address}, {city}
      </p>
      <p>Metri quadrati: {square_meters} m²</p>
      <p>Stanze: {rooms}</p>
      <p>Letti: {beds}</p>
      <p>Bagni: {bathrooms}</p>
      <p>Descrizione: {description}</p>

      <h2>Immagini</h2>
      {images &&
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Immagine ${index + 1}`}
            width="200"
          />
        ))}

      <h2>Proprietario</h2>
      <p>Nome: {owner_name}</p>
      <p>Email: {owner_email}</p>

      <button onClick={() => navigate(-1)}>Torna indietro</button>
    </div>
  );
}
export default CardDettagliata;
