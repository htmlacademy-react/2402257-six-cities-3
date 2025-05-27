import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';

type MainScreenProps = {
  welcomeScreenData: {
    foundedPlacesCount: number;
    email: string;
    favoritePlacesCount: number;
  };
  cardsData: {
    id: number | string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  }[];
  cities: { name: string; key: number }[];
};

function MainScreen({
  welcomeScreenData,
  cardsData,
  cities,
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <HeaderScreen headerData={welcomeScreenData} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsMenuScreen cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <PlacesLeftScreen
              cardsData={cardsData}
              foundedPlacesCount={welcomeScreenData.foundedPlacesCount}
            />
            <PlacesRightScreen />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
