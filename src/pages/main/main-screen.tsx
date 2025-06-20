import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';
import { Helmet } from 'react-helmet-async';
import { PageType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUniqueCities } from '../../logic/header-cities';

type MainScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cities: { name: string; key: number }[];
  activeOfferId: string | number | null;
  onOfferHover: (id: string | number) => void;
  pageType: PageType.Main;
  favoritesCount: number;
};

function MainScreen({
  loggedHeaderData,
  cities,
  activeOfferId,
  onOfferHover,
  pageType,
  favoritesCount,
}: MainScreenProps): JSX.Element {
  const cards = useAppSelector((state) => state.offerList);
  const currentCityName = useAppSelector((state) => state.currentCity);

  const currentCityData = getUniqueCities(cards).filter(
    (city) => city.name === currentCityName
  )[0];

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
              cardsData={cards}
              foundedPlacesCount={cards.length}
              onOfferHover={onOfferHover}
              pageType={pageType}
              currentCity={currentCityData.name}
            />
            <PlacesRightScreen
              activeOfferId={activeOfferId}
              cardsData={cards}
              city={currentCityData}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
