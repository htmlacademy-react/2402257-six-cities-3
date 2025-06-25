import { Points } from '../../types/types';
import FavoritesLocationList from '../favorite-location-list/favorites-location-list';
import FavoritesEmptyScreen from '../favorites-empty/favorites-empty-screen';

type FavoritesListScreenProps = {
  favoritesOffers: Points;
  cities: string[];
};

function FavoritesListScreen({
  favoritesOffers,
  cities,
}: FavoritesListScreenProps): JSX.Element {
  if (favoritesOffers.length === 0) {
    return <FavoritesEmptyScreen />;
  }
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Array.from(cities).map((city) => (
          <FavoritesLocationList
            key={city}
            name={city}
            favoritesOffers={favoritesOffers}
          />
        ))}
      </ul>
    </section>
  );
}

export default FavoritesListScreen;
