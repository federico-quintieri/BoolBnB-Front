export function CardDettagliata({
    address,
    bathrooms,
    beds,
    city,
    description,
    images,
    owner_email,
    owner_name,
    rooms,
    square_meters,
    tipo,
    title,
    recensioni,
  }) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Tipo: {tipo}</p>
        <p>Indirizzo: {address}, {city}</p>
        <p>Metri quadrati: {square_meters} m²</p>
        <p>Stanze: {rooms}</p>
        <p>Letti: {beds}</p>
        <p>Bagni: {bathrooms}</p>
        <p>Descrizione: {description}</p>
        
        <h2>Immagini</h2>
        {images && images.map((image, index) => (
          <img key={index} src={image} alt={`Immagine ${index + 1}`} width="200" />
        ))}
        
        <h2>Proprietario</h2>
        <p>Nome: {owner_name}</p>
        <p>Email: {owner_email}</p>
        
        {recensioni && recensioni.length > 0 && (
          <div>
            <h2>Recensioni</h2>
            {recensioni.map((recensione, index) => (
              <div key={index}>
                <p>Recensore: {recensione.recensore}</p>
                <p>Giorni di permanenza: {recensione.giorni_permanenza}</p>
                <p>Commento: {recensione.commento}</p>
                <p>Voto: {recensione.voto}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  