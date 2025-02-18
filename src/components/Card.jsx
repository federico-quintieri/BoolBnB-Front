import { Link } from "react-router-dom";

const Card = ({ title, tipo, immagine, description, city, slug }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm border border-gray-200 p-4 flex flex-col">
      {/* Immagine principale */}
      <img
        src={immagine}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>

        <h3 className="text-sm text-gray-600 mb-2 my-1">
          <span className="text-1xl font-semibold text-gray-800 mb-2 mr-1.5">
            📍 {city}
          </span>
          {tipo}{" "}
        </h3>
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
