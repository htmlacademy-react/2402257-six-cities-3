type CardProps = {
  cardData: {
    // id: string;
    title: string;
    type: string;
    price: number;
    // city: {
    //   name: string;
    //   location: {
    //     latitude: number;
    //     longitude: number;
    //     zoom: number;
    //   };
    // };
    // location: {
    //   latitude: number;
    //   longitude: number;
    //   zoom: number;
    // };
    isFavorite: boolean;
    isPremium: boolean;
    // rating: number;
    previewImage: string;
  };
};

function CitiesCard({ cardData }: CardProps): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>{cardData.isPremium ? 'Premium' : ''}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={cardData.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{cardData.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              cardData.isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{cardData.title}</a>
        </h2>
        <p className="place-card__type">
          {cardData.type.slice(0, 1).toUpperCase() + cardData.type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default CitiesCard;
