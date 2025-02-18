import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";

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
  const { apiUrl } = useGlobalContext();

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{title}</h1>
      <p className="text-gray-700">
        <span className="font-semibold">Tipo:</span> {tipo}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Indirizzo:</span> {address}, {city}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Metri quadrati:</span> {square_meters}{" "}
        m²
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Stanze:</span> {rooms}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Letti:</span> {beds}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Bagni:</span> {bathrooms}
      </p>
      <p className="text-gray-700 mt-4">{description}</p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">Immagini</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {images &&
          images.map((image, index) => (
            <img
              key={index}
              src={`${apiUrl}${image}`}
              alt={`Immagine ${index + 1}`}
              className="w-full h-40 object-cover rounded-md shadow-md"
            />
          ))}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        Proprietario
      </h2>
      <p className="text-gray-700">
        <span className="font-semibold">Nome:</span> {owner_name}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Email:</span> {owner_email}
      </p>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Torna indietro
      </button>
    </div>
  );
}
export default CardDettagliata;
