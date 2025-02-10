export function Card({ title, tipo, images, description, city }) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{tipo}</h3>
      <img src={images} alt={title} />
      <p>{description}</p>
      <p>{city}</p>
    </div>
  );
}
