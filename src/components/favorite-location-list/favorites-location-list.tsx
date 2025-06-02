import FavoritesCardScreen from '../favorites-card/favorites-card-screen';

type FavoritesLocationListProps = {
  name: string;
  favoritesOffers: {
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
  }[];
};

function FavoritesLocationList({
  name,
  favoritesOffers,
}: FavoritesLocationListProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favoritesOffers.map((card) => {
          if (card.city.name === name) {
            return <FavoritesCardScreen key={card.id} cardData={card} />;
          }
          return null;
        })}
      </div>
    </li>
  );
}
export default FavoritesLocationList;
