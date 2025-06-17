import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';
import { Helmet } from 'react-helmet-async';
import { Points, City } from '../../types/types';
import { PageType } from '../../const';
type MainScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cardsData: Points;
  cities: { name: string; key: number }[];
  activeOfferId: string | number | null;
  onOfferHover: (id: string | number) => void;
  pageType: PageType.Main;
  favoritesCount: number;
  currentCityData: City;
};

function MainScreen({
  loggedHeaderData,
  cardsData,
  cities,
  activeOfferId,
  onOfferHover,
  pageType,
  favoritesCount,
  currentCityData,
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <HeaderScreen
        headerData={loggedHeaderData}
        favoritesCount={favoritesCount}
      />
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
              onOfferHover={onOfferHover}
              pageType={pageType}
            />
            <PlacesRightScreen
              activeOfferId={activeOfferId}
              cardsData={cardsData}
              city={currentCityData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
