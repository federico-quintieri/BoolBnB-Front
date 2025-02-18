// Importo componenti per creare HomePage
import { CardList } from "../components/CardList";
import { Link } from "react-router-dom";
export function Homepage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-center gap-4 mb-6">
        <h1 className="text-3xl font-bold">Trova il tuo immobile ideale</h1>
        <Link
          to="/ricerca_immobile"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Clicca qui
        </Link>
      </div>
      <div className="mt-6 flex justify-center w-full">
        <CardList />
      </div>
    </div>
  );
}
