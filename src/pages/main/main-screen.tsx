import HeaderScreen from '../../components/header/header-screen';
import PlacesLeftScreen from '../../components/places-left/places-left-screen';
import PlacesRightScreen from '../../components/places-right/places-right-screen';
import LocationsMenuScreen from '../../components/locations-menu/locations-menu-screen';
import { Helmet } from 'react-helmet-async';
import { PageType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getUniqueCities } from '../../logic/header-cities';
import { filterOffersByCity } from '../../logic/filter-offers';
import cn from 'classnames';
import {
  getHasError,
  getOriginOffers,
} from '../../store/offers-data/selectors';
import { getCurrentCity } from '../../store/cities-process/selectors';
import { sortCurrentOffers } from '../../logic/sort-offers';
import { getSorting } from '../../store/sorting-process/selectors';
import NoResponseErrorScreen from '../no-response/no-response-screen';

type MainScreenProps = {
  cities: { name: string; key: number }[];
  activeOfferId: string | number | null;
  onOfferHover: (id: string | number) => void;
  pageType: PageType.Main;
};

function MainScreen({
  cities,
  activeOfferId,
  onOfferHover,
  pageType,
}: MainScreenProps): JSX.Element {
  const originCards = useAppSelector(getOriginOffers);
  const currentCityName = useAppSelector(getCurrentCity);
  const currentSortType = useAppSelector(getSorting);
  const cards = sortCurrentOffers(
    filterOffersByCity(originCards, currentCityName),
    currentSortType
  );
  const hasError = useAppSelector(getHasError);

  if (hasError) {
    return <NoResponseErrorScreen />;
  }

  const noneOffers = cards.length === 0;

  const currentCityData = getUniqueCities(cards).filter(
    (city) => city.name === currentCityName
  )[0];

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <HeaderScreen />
      <main
        className={cn('page__main page__main--index ', {
          'page__main--index-empty': noneOffers,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsMenuScreen cities={cities} />
        </div>
        <div className="cities">
          <div
            className={cn('cities__places-container container', {
              'cities__places-container--empty': noneOffers,
            })}
          >
            <PlacesLeftScreen
              cardsData={cards}
              foundedPlacesCount={cards.length}
              onOfferHover={onOfferHover}
              pageType={pageType}
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
