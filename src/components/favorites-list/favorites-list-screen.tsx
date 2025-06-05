import FavoritesLocationList from '../favorite-location-list/favorites-location-list';

type FavoritesListScreenProps = {
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
  cities: Set<string>;
};

function FavoritesListScreen({
  favoritesOffers,
  cities,
}: FavoritesListScreenProps): JSX.Element {
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
