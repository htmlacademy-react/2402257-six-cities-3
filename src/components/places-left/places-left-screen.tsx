import OfferCardScreen from '../card/offer-card';
import NoPlacesLeftScreen from '../no-places-left/no-places-left-screen';
import PlacesFound from '../places-found/places-found';
import { PageType } from '../../const';
import { ContainerRatingType } from '../../const';
import PlacesSortingScreen from '../places-sorting/places-sorting-screen';
type CardsDataProps = {
  foundedPlacesCount: number;
  cardsData: {
    id: number | string;
    title: string;
    type: string;
    price: number;
    rating: number;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  }[];
  onOfferHover: (id: string | number) => void;
  pageType: PageType.Main;
  currentCity: string;
};
function PlacesLeftScreen({
  cardsData,
  foundedPlacesCount,
  onOfferHover,
  pageType,
  currentCity,
}: CardsDataProps): JSX.Element {
  if (cardsData.length === 0) {
    return <NoPlacesLeftScreen />;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <PlacesFound foundedPlacesCount={foundedPlacesCount} city={currentCity} />
      <form className="places__sorting" action="#" method="get">
        <PlacesSortingScreen />
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cardsData.map((card) => (
          <OfferCardScreen
            key={card.id}
            cardData={card}
            onOfferHover={onOfferHover}
            pageType={pageType}
            containerType={ContainerRatingType.Main}
          />
        ))}
      </div>
    </section>
  );
}

export default PlacesLeftScreen;
