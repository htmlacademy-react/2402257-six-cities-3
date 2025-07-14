import { Link } from 'react-router-dom';
import { PageType } from '../../const';
import cn from 'classnames';
import { OffersNearby } from '../../types/types';
import RatingScreen from '../rating/rating-screen';
import { ContainerRatingType } from '../../const';
import { useAppDispatch } from '../../hooks';
import { toggleFavoriteOffer } from '../../store/offers-data/offers-data';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { useAppSelector } from '../../hooks';
import { postFavoriteOfferAction } from '../../store/api-actions';
import { getFavoriteStatus } from '../../logic/favorite-status';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { redirectToRoute } from '../../store/action';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../const';

type CardProps = {
  cardData: OffersNearby;
  onOfferHover: (id: number | string) => void;
  pageType: PageType.Main | PageType.Offer;
  containerType: ContainerRatingType.Place | ContainerRatingType.Main;
};

function OfferCardScreen({
  cardData,
  onOfferHover,
  pageType,
  containerType,
}: CardProps): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavoriteStatus = getFavoriteStatus(favoriteOffers, cardData.id);
  const dispatch = useAppDispatch();
  const isMain = pageType === PageType.Main;
  return (
    <article
      className={cn(
        'place-card',
        // prettier-ignore
        { 'cities__card': isMain },
        { 'near-places__card': !isMain }
      )}
      onMouseOver={() => onOfferHover(cardData.id)}
    >
      {cardData.isPremium ? (
        <div className="place-card__mark">Premium</div>
      ) : (
        ''
      )}
      <div
        className={cn(
          'place-card__image-wrapper',
          // prettier-ignore
          { 'cities__image-wrapper': isMain },
          { 'near-places__image-wrapper': !isMain }
        )}
      >
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
          {authorizationStatus === AuthorizationStatus.Auth ? (
            <button
              className={
                isFavoriteStatus === 0
                  ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                  : 'place-card__bookmark-button button'
              }
              type="button"
              onClick={() => {
                dispatch(toggleFavoriteOffer(cardData.id));
                dispatch(
                  postFavoriteOfferAction({
                    id: cardData.id,
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
          <RatingScreen
            rating={cardData.rating}
            containerType={containerType}
          />
        </div>
        <h2 className="place-card__name">
          <Link
            className="header__logo-link header__logo-link--active"
            to={`../offer/${cardData.id}`}
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

export default OfferCardScreen;
