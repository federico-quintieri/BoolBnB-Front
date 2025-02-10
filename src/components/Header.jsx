import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/inserisci_immobile">Inserisci Immobile</Link>
          </li>
          <li>
            <Link to="/ricerca_immobile">Ricerca Immobile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
