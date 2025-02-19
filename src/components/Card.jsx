import { Link } from "react-router-dom";
import { useGlobalContext } from "./GlobalContext";
import { FaBed, FaBath, FaDoorOpen } from "react-icons/fa"; // Importa le icone

const Card = ({
  title,
  tipo,
  images,
  description,
  city,
  slug,
  beds,
  rooms,
  bathrooms,
}) => {
  const { apiUrl } = useGlobalContext();

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm border border-gray-200 p-4 flex flex-col">
      {/* Immagine principale */}
      <img
        src={`${apiUrl}${images[0]}`}
        alt={title}
        width="100%"
        height="auto"
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <h3 className="text-sm text-gray-600 mb-2 my-1">
          <span className="text-1xl font-semibold text-gray-800 mb-2 mr-1.5">
            📍 {city}
          </span>
          {tipo}
        </h3>

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

        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="mt-auto">
          <Link
            to={`/dettagli_immobile/${slug}`}
            className="inline-block bg-blue-500 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Vedi Dettagli
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
