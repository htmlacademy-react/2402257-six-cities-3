import HeaderScreen from '../../components/header/header-screen';
import FavoritesEmptyScreen from '../../components/favorites-empty/favorites-empty-screen';
import FavoritesListScreen from '../../components/favorites-list/favorites-list-screen';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import {
  getFavoritesIsLoading,
  getHasError,
  getLoadedFavorites,
} from '../../store/favorite-process/selectors';
import { getCitiesData } from '../../store/offers-data/selectors';
import { useAppDispatch } from '../../hooks';
import { fetchFavoritesOffers } from '../../store/api-actions';
import { useEffect } from 'react';
import LoadingScreen from '../loading/loading-screen';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import NoResponseErrorScreen from '../no-response/no-response-screen';

function FavoritesScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoritesIsLoading = useAppSelector(getFavoritesIsLoading);
  const cities = useAppSelector(getCitiesData);
  const favoritesOffers = useAppSelector(getLoadedFavorites);
  const hasError = useAppSelector(getHasError);

  useEffect(() => {
    dispatch(fetchFavoritesOffers());
  }, [dispatch]);

  if (hasError) {
    return <NoResponseErrorScreen />;
  }

  if (favoritesIsLoading) {
    return <LoadingScreen size={60} color="#4481C3" />;
  }

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
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
