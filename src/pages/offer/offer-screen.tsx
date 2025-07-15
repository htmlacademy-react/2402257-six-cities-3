import HeaderScreen from '../../components/header/header-screen';
import { Helmet } from 'react-helmet-async';
import ReviewItemScreen from '../../components/review-item/review-item-screen';
import CommentFormScreen from '../../components/comment-form/comment-form-screen';
import { DetailedOfferData } from '../../types/types';
import OfferImgScreen from '../../components/offer-img/offer-img-screen';
import RatingScreen from '../../components/rating/rating-screen';
import { ContainerRatingType } from '../../const';
import cn from 'classnames';
import { PageType } from '../../const';
import OfferCardScreen from '../../components/offer-card/offer-card';
import MapScreen from '../../components/map/map';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import {
  fetchDetailedOffersDataAction,
  postFavoriteOfferAction,
} from '../../store/api-actions';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../loading/loading-screen';
import { clearDetailedOfferData } from '../../store/detailed-offer-process/detailed-offer-process';
import { Points } from '../../types/types';
import { getOriginOffers } from '../../store/offers-data/selectors';
import { getDetailedOfferData } from '../../store/detailed-offer-process/selectors';
import { toggleFavoriteOffer } from '../../store/offers-data/offers-data';
import { getFavoriteOffers } from '../../store/offers-data/selectors';
import { getUserComments } from '../../store/form-process.ts/selectors';
import { getFavoriteStatus } from '../../logic/favorite-status';
import { getHasError } from '../../store/detailed-offer-process/selectors';
import NotFoundScreen from '../not-found/not-found-screen';
import { getFavoritesIsLoading } from '../../store/offers-data/selectors';

type OfferScreenProps = {
  authorizationStatus:
    | AuthorizationStatus.Auth
    | AuthorizationStatus.NoAuth
    | AuthorizationStatus.Unknown;
};
function OfferScreen({ authorizationStatus }: OfferScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const { id } = useParams();
  const allOffers = useAppSelector(getOriginOffers);
  const userComments = useAppSelector(getUserComments);
  const offerDetailedData = useAppSelector(getDetailedOfferData);
  const isFavoriteStatus = getFavoriteStatus(favoriteOffers, id);
  const favoriteOfferLoading = useAppSelector(getFavoritesIsLoading);
  const hasError = useAppSelector(getHasError);
  useEffect(() => {
    dispatch(fetchDetailedOffersDataAction(id));

    return () => {
      dispatch(clearDetailedOfferData());
    };
  }, [dispatch, id]);

  if (hasError) {
    return <NotFoundScreen />;
  }
  if (offerDetailedData === null || favoriteOfferLoading) {
    return <LoadingScreen size={60} color="#4481C3" />;
  }

  const { detailedOffer, nearbyOffers, comments }: DetailedOfferData =
    offerDetailedData;

  const bedrooms =
    detailedOffer.bedrooms > 1
      ? `${detailedOffer.bedrooms} Bedrooms`
      : '1 Bedroom';
  const guests =
    detailedOffer.maxAdults > 1
      ? `Max ${detailedOffer.maxAdults} Adults`
      : 'Max 1 Adult';

  const offersOnMap: Points = nearbyOffers
    .slice(0, 3)
    .concat(allOffers.find((offer) => offer.id === id) ?? []);

  return (
    <div className="page">
      <Helmet>
        <title>Персонализированное предложения</title>
      </Helmet>
      <HeaderScreen />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {detailedOffer.images.map((image) => (
                <OfferImgScreen src={image} key={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {detailedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{detailedOffer.title}</h1>
                <button
                  className={
                    isFavoriteStatus
                      ? 'offer__bookmark-button offer__bookmark-button--active button'
                      : 'offer__bookmark-button button'
                  }
                  type="button"
                  onClick={() => {
                    dispatch(toggleFavoriteOffer(detailedOffer.id));
                    dispatch(
                      postFavoriteOfferAction({
                        id: id,
                        status: isFavoriteStatus,
                      })
                    );
                  }}
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <RatingScreen
                  rating={detailedOffer.rating}
                  containerType={ContainerRatingType.Offer}
                />
                <span className="offer__rating-value rating__value">
                  {detailedOffer.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {detailedOffer.type.slice(0, 1).toUpperCase() +
                    detailedOffer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {guests}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{detailedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {detailedOffer.goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={cn(
                      'offer__avatar-wrapper user__avatar-wrapper',
                      { 'offer__avatar-wrapper--pro': detailedOffer.host.isPro }
                    )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={detailedOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {detailedOffer.host.name}
                  </span>
                  {}
                  {detailedOffer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {/* <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p> */}
                  <p className="offer__text">{detailedOffer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ul className="reviews__list">
                  {comments.map((comment) => (
                    <ReviewItemScreen key={comment.id} commentData={comment} />
                  ))}
                  {userComments.map((comment) => (
                    <ReviewItemScreen key={comment.id} commentData={comment} />
                  ))}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <CommentFormScreen />
                )}
              </section>
            </div>
          </div>
          <MapScreen
            city={detailedOffer.city}
            points={offersOnMap}
            selectedPoint={allOffers.find((offer) => offer.id === id)}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearbyOffers.slice(0, 3).map((card) => (
                <OfferCardScreen
                  key={card.id}
                  cardData={card}
                  onOfferHover={() => null}
                  pageType={PageType.Offer}
                  containerType={ContainerRatingType.Place}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
