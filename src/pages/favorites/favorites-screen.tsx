import HeaderScreen from '../../components/header/header-screen';
import FavoritesEmptyScreen from '../../components/favorites-empty/favorites-empty-screen';
import FavoritesListScreen from '../../components/favorites-list/favorites-list-screen';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
type FavoritesScreenProps = {
  loggedHeaderData: {
    email: string;
  };
};

function FavoritesScreen({
  loggedHeaderData,
}: FavoritesScreenProps): JSX.Element {
  const favoritesOffers = useAppSelector((state) => state.favoritesOffers);
  const cities = useAppSelector((state) => state.citiesData);
  return (
    <div className="page">
      <Helmet>
        <title>Избранные предложения</title>
      </Helmet>
      <HeaderScreen headerData={loggedHeaderData} />
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
