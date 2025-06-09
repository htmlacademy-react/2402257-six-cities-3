import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';
import { Helmet } from 'react-helmet-async';
import { City, Points } from '../../types/types';

type MainScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cardsData: Points;
  cities: { name: string; key: number }[];
  activeOfferId: string | number | null;
  onOfferHover: (id: string | number) => void;
  city: City;
};

function MainScreen({
  loggedHeaderData,
  cardsData,
  cities,
  activeOfferId,
  onOfferHover,
  city,
}: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <HeaderScreen headerData={loggedHeaderData} cardsData={cardsData} />
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
            />
            <PlacesRightScreen
              activeOfferId={activeOfferId}
              cardsData={cardsData}
              city={city}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
