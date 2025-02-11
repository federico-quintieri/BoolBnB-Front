import { Link } from "react-router-dom";
import { CardDettagliata } from "../components/CardDettagliata";

const Card = ({ title, tipo, images, description, city, slug }) => (
  <div>
    <h2>{title}</h2>
    <h3>{tipo}</h3>
    <img src={images} alt={title} />
    <p>{description}</p>
    <p>{city}</p>
    <Link to={`${CardDettagliata}`}>
      <button>Vedi Dettagli</button>
    </Link>
  </div>
);

export default Card;
