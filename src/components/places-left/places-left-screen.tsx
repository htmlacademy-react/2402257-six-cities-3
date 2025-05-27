import OfferCard from '../card/offer-card';
import NoPlacesLeftScreen from '../no-places-left/no-places-left-screen';
import PlacesFound from '../places-found/places-found';

type CardsData = {
  foundedPlacesCount: number;
  cardsData: {
    id: number | string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  }[];
};
function PlacesLeftScreen({
  cardsData,
  foundedPlacesCount,
}: CardsData): JSX.Element {
  if (cardsData.length === 0) {
    return <NoPlacesLeftScreen />;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <PlacesFound foundedPlacesCount={foundedPlacesCount} />
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
          Popular
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>
            Popular
          </li>
          <li className="places__option" tabIndex={0}>
            Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
            Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
            Top rated first
          </li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {cardsData.map((card) => (
          <OfferCard key={card.id} cardData={card} />
        ))}
      </div>
    </section>
  );
}

export default PlacesLeftScreen;
