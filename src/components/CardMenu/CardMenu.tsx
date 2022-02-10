import CardInterface from "../../interfaces/cardInterface";

export default function CardMenu({
  id,
  title,
  image,
  healthScore,
  pricePerServing,
  vegan,
}: CardInterface) {
  return (
    <div className="card__container">
      <div className="card__container-img">
        <a href={`/information/${id}`}>
          <img src={image} alt={title} />
        </a>
      </div>

      <div className="card__container-info">
        <a href={`/information/${id}`}>
          <p className="card__title">{title}</p>
        </a>

        <div>
          <p className="card__price">${pricePerServing}</p>

          <p className="card__healt-score">{healthScore}</p>

          <p className="card__vegan">{vegan ? "Vegan" : "Not Vegan"}</p>
        </div>

        <div className="card__container-buttons">
          <button className="card__button">
            <i className="fas fa-shopping-cart"></i>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
