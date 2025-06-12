import HeaderScreen from '../../components/header/header-screen';
import { Helmet } from 'react-helmet-async';
import ReviewItemScreen from '../../components/review-item/review-item-screen';
import CommentFormScreen from '../../components/comment-form/comment-form-screen';
import { CardComments, Points, DetailedOffer } from '../../types/types';
import OfferImgScreen from '../../components/offer-img/offer-img-screen';
import RatingScreen from '../../components/rating/rating-screen';
import { ContainerRatingType } from '../../const';
import cn from 'classnames';
import { PageType } from '../../const';
import OfferCardScreen from '../../components/card/offer-card';
import MapScreen from '../../components/map/map';
import { OffersNearby } from '../../types/types';
import { AuthorizationStatus } from '../../const';

type OfferScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cardsData: Points;
  cardsComments: CardComments;
  offerData: DetailedOffer;
  offersNearby: OffersNearby[];
  authorizationStatus: AuthorizationStatus.Auth | AuthorizationStatus.NoAuth;
};
function OfferScreen({
  loggedHeaderData,
  cardsData,
  cardsComments,
  offerData,
  offersNearby,
  authorizationStatus,
}: OfferScreenProps): JSX.Element {
  const bedrooms =
    offerData.bedrooms > 1 ? `${offerData.bedrooms} Bedrooms` : '1 Bedroom';
  const guests =
    offerData.maxAdults > 1
      ? `Max ${offerData.maxAdults} Adults`
      : 'Max 1 Adult';

  return (
    <div className="page">
      <Helmet>
        <title>Персонализированное предложения</title>
      </Helmet>
      <HeaderScreen headerData={loggedHeaderData} cardsData={cardsData} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerData.images.map((image) => (
                <OfferImgScreen src={image} key={image} />
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerData.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offerData.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <RatingScreen
                  rating={offerData.rating}
                  containerType={ContainerRatingType.Offer}
                />
                <span className="offer__rating-value rating__value">
                  {offerData.rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerData.type.slice(0, 1).toUpperCase() +
                    offerData.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {guests}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offerData.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerData.goods.map((good) => (
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
                      { 'offer__avatar-wrapper--pro': offerData.host.isPro }
                    )}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offerData.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offerData.host.name}
                  </span>
                  {}
                  {offerData.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  {/* <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p> */}
                  <p className="offer__text">{offerData.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">
                    {cardsComments.length}
                  </span>
                </h2>
                <ul className="reviews__list">
                  {cardsComments.map((comment) => (
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
            city={offerData.city}
            points={cardsData}
            selectedPoint={cardsData.find((card) => card.id === offerData.id)}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby.map((card) => (
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
