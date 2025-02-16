import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-black">
          BOOLBNB
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 border rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navbar Links */}
        <div className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"} absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent p-4 lg:p-0`}>
          <Link to="/" className="block lg:inline-block px-4 py-2 bg-white text-black border border-gray-300 rounded-2xl hover:bg-gray-200">
            Homepage
          </Link>
          <Link to="/immobile" className="block lg:inline-block px-4 py-2 bg-white text-black border border-gray-300 rounded-2xl hover:bg-gray-200">
            Tutte le nostre proposte
          </Link>
          <Link to="/inserisci_immobile" className="block lg:inline-block px-4 py-2 bg-white text-black border border-gray-300 rounded-2xl hover:bg-gray-200">
            Registra la tua struttura
          </Link>
          <Link to="/ricerca_immobile" className="block lg:inline-block px-4 py-2 bg-white text-black border border-gray-300 rounded-2xl hover:bg-gray-200">
            Ricerca Immobile
          </Link>
        </div>
      </div>
    </nav>
  );
}