import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { toggleFavoriteOffer } from '../../store/offers-data/offers-data';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { postFavoriteOfferAction } from '../../store/api-actions';
import { getFavoriteStatus } from '../../logic/favorite-status';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const';

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
  const dispatch = useAppDispatch();
  const id = cardData.id;
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteStatus = getFavoriteStatus(favoriteOffers, id);
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
          {authorizationStatus === AuthorizationStatus.Auth ? (
            <button
              className={
                isFavoriteStatus
                  ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                  : 'place-card__bookmark-button button'
              }
              type="button"
              onClick={() => {
                dispatch(toggleFavoriteOffer(cardData.id));
                dispatch(
                  postFavoriteOfferAction({
                    id: id,
                    status: isFavoriteStatus,
                  })
                );
              }}
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
                <span className="visually-hidden">In bookmarks</span>
              </svg>
            </button>
          ) : (
            <button
              className={'place-card__bookmark-button button'}
              type="button"
              onClick={() => {
                dispatch(redirectToRoute(AppRoute.Login));
              }}
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          )}
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
