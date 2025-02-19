import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Bool BnB</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/inserisci_immobile" className="hover:text-gray-400 transition">Inserisci Immobile</Link>
          </li>
          <li>
            <Link to="/ricerca_immobile" className="hover:text-gray-400 transition">Ricerca Immobile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
