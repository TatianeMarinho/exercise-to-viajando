type CardProps = {
  cityInfo: {
    city: string,
    country: string,
    imageUrl: string,
    viseted?:boolean,
  }
};

function Card({ cityInfo }: CardProps) {
  const { city, country, viseted = false, imageUrl } = cityInfo;

  return (
    <div className="card">
      <img src={ imageUrl } alt={ city } />
      <div>
        <h2>{city}</h2>
        <h3>{country}</h3>
        {viseted ? <p>Já Fui!</p> : <p>Não Fui.</p>}
      </div>
    </div>
  );
}

export default Card;
