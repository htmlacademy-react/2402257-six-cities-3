import LocationItemScreen from './location-item/location-item-screen';

type Cities = {
  cities: {
    name: string;
    key: number;
  }[];
};

function LocationsMenuScreen({ cities }: Cities): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <LocationItemScreen name={city.name} key={city.key} />
        ))}
      </ul>
    </section>
  );
}

export default LocationsMenuScreen;
