import { Link } from 'react-router-dom';
import { store } from '../../store/store';

type FavoritesCardProps = {
  cardData: {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
    };
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  };
};

function FavoritesCardScreen({ cardData }: FavoritesCardProps): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {cardData.isPremium ? (
        <div className="place-card__mark">Premium</div>
      ) : (
        ''
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={cardData.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{cardData.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={
              cardData.isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
            onClick={() => {
              store.dispatch({
                type: 'setIsFavorite',
                payload: cardData.id,
              });
            }}
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            className="header__logo-link header__logo-link--active"
            to={`/offer/${cardData.id}`}
          >
            {cardData.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {cardData.type.slice(0, 1).toUpperCase() + cardData.type.slice(1)}
        </p>
      </div>
    </article>
  );
}

export default FavoritesCardScreen;
