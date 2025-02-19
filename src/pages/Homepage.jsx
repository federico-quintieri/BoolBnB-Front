import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { CardList } from "../components/CardList";
import { Search } from "lucide-react"; // Icona di ricerca

export function Homepage() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Hook per la navigazione

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/ricerca_immobile?city=${encodeURIComponent(search)}`);
    }
  };
  return (
    <div className="relative">
      {/* Immagine di sfondo più alta */}
      <div className="relative w-full h-[600px]">
        <img
          className="w-full h-full object-cover"
          src="/Background.png"
          alt=""
        />

        {/* Search Bar con pulsante */}
        <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
          <h1 className="mb-5 text-5xl font-extrabold text-center text-white relative">
            <span className="relative z-10">
              Il tuo rifugio perfetto ti aspetta
            </span>
            <span className="absolute inset-0 text-black -z-10 blur-md">
              Il tuo rifugio perfetto ti aspetta
            </span>
          </h1>

          <div className="relative">
            <input
              type="text"
              placeholder="Dove vuoi andare?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white p-3 pl-5 pr-14 text-lg border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              onClick={handleSearch}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Contenuto principale */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center gap-4 mb-8">
          {" "}
          {/* Aumenta il margine inferiore */}
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 text-center py-2">
            I migliori della stagione!
          </h1>
        </div>
        <div className="mt-6 flex justify-center w-full">
          <CardList numeroCard={6} />
        </div>
      </div>
    </div>
  );
}
