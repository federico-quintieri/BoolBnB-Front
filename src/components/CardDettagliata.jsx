import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import ImageCarousel from "./ImageCarousel";
import { FaBed, FaBath, FaDoorOpen } from "react-icons/fa"; // Importa le icone


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
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        {title}
      </h1>
      {images && <ImageCarousel images={images} />}
      <p className="text-gray-700 mt-2.5 mb-1.5">
        <span className="font-semibold">Tipo:</span> {tipo}
      </p>
      <p className="text-gray-700 my-1.5">
        <span className="font-semibold">Indirizzo:</span> {address}, {city}
      </p>
      <p className="text-gray-700 my-1.5">
        <span className="font-semibold">Metri quadrati:</span> {square_meters}{" "}
        m²
      </p>
      {/* Icone per le informazioni */}
      <div className="text-gray-700 text-sm mb-4 flex gap-4">
        <p className="flex items-center gap-1">
          <FaDoorOpen className="text-blue-500" /> <span>{rooms}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaBed className="text-blue-500" /> <span>{beds}</span>
        </p>
        <p className="flex items-center gap-1">
          <FaBath className="text-blue-500" /> <span>{bathrooms}</span>
        </p>
      </div>
      <p className="text-gray-700 mt-4">{description}</p>
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
