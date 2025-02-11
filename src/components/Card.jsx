import { Link } from "react-router-dom";
import CardDettagliata from "../components/CardDettagliata";

const Card = ({ title, tipo, images, description, city, slug }) => (
  <div>
    <h2>{title}</h2>
    <h3>{tipo}</h3>
    <img src={images} alt={title} />
    <p>{description}</p>
    <p>{city}</p>
    <Link to={`/dettagli_immobile/${slug}`}>Vedi Dettagli</Link>
  </div>
);

export default Card;
