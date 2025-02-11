import { Link, useParams } from "react-router-dom";

const CardDettagliata = ({ data }) => {
  const { slug } = useParams();
  const details = data.find(item => item.slug === slug);

  if (!details) return <p>Dettagli non trovati.</p>;

  return (
    <div>
      <h1>{details.title}</h1>
      <p>Tipo: {details.tipo}</p>
      <p>Indirizzo: {details.address}, {details.city}</p>
      <p>Metri quadrati: {details.square_meters} m²</p>
      <p>Stanze: {details.rooms}</p>
      <p>Letti: {details.beds}</p>
      <p>Bagni: {details.bathrooms}</p>
      <p>Descrizione: {details.description}</p>

      <h2>Immagini</h2>
      {details.images?.map((image, index) => (
        <img key={index} src={image} alt={`Immagine ${index + 1}`} width="" />
      ))}

      <h2>Proprietario</h2>
      <p>Nome: {details.owner_name}</p>
      <p>Email: {details.owner_email}</p>

      {details.recensioni?.length > 0 && (
        <div>
          <h2>Recensioni</h2>
          {details.recensioni.map((recensione, index) => (
            <div key={index}>
              <p>Recensore: {recensione.recensore}</p>
              <p>Giorni di permanenza: {recensione.giorni_permanenza}</p>
              <p>Commento: {recensione.commento}</p>
              <p>Voto: {recensione.voto}</p>
            </div>
          ))}
        </div>
      )}
      <Link to="/"><button>Torna Indietro</button></Link>
    </div>
  );
};

export default CardDettagliata;
