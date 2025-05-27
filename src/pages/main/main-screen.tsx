import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';
import { Helmet } from 'react-helmet-async';

type MainScreenProps = {
  loggedHeaderData: {
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
  loggedHeaderData,
  cardsData,
  cities,
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <HeaderScreen headerData={loggedHeaderData} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsMenuScreen cities={cities} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <PlacesLeftScreen
              cardsData={cardsData}
              foundedPlacesCount={cardsData.length}
            />
            <PlacesRightScreen />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
