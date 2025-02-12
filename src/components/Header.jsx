import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li>
                <Link to="/" className="nav-link active btn btn-secondary">Homepage</Link>
              </li>
              <li>
                <Link to="/immobile" className="nav-link active btn btn-secondary">Tutte le nostre proposte</Link>
              </li>
              <li>
                <Link to="/inserisci_immobile" className="nav-link active btn btn-secondary">Registra la tua struttura</Link>
              </li>
              <li>
                <Link to="/ricerca_immobile" className="nav-link active btn btn-secondary">Ricerca Immobile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

