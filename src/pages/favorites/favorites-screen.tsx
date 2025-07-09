import HeaderScreen from '../../components/header/header-screen';
import FavoritesEmptyScreen from '../../components/favorites-empty/favorites-empty-screen';
import FavoritesListScreen from '../../components/favorites-list/favorites-list-screen';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-process/selectors';
import {
  getCitiesData,
  getOriginOffers,
} from '../../store/offers-data/selectors';

function FavoritesScreen(): JSX.Element {
  const favoritesOffersId = useAppSelector(getFavoriteOffers);
  const cities = useAppSelector(getCitiesData);
  const originOffers = useAppSelector(getOriginOffers);

  const favoritesOffers = originOffers.filter((offer) =>
    favoritesOffersId.includes(offer.id)
  );
  return (
    <div className="page">
      <Helmet>
        <title>Избранные предложения</title>
      </Helmet>
      <HeaderScreen />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {cities.length === 0 ? (
            <FavoritesEmptyScreen />
          ) : (
            <FavoritesListScreen
              favoritesOffers={favoritesOffers}
              cities={cities}
            />
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
