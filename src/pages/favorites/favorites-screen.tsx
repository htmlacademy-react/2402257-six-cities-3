import HeaderScreen from '../../components/header/header-screen';
import FavoritesEmptyScreen from '../../components/favorites-empty/favorites-empty-screen';
import FavoritesListScreen from '../../components/favorites-list/favorites-list-screen';
import { Helmet } from 'react-helmet-async';

type FavoritesScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cardsData: {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
    };
    isFavorite: boolean;
    isPremium: boolean;
    previewImage: string;
  }[];
};

function FavoritesScreen({
  loggedHeaderData,
  cardsData,
}: FavoritesScreenProps): JSX.Element {
  const favoritesOffers = cardsData.filter((offer) => offer.isFavorite);
  const cities = new Set(cardsData.map((offer) => offer.city.name));

  return (
    <div className="page">
      <Helmet>
        <title>Избранные предложения</title>
      </Helmet>
      <HeaderScreen headerData={loggedHeaderData} cardsData={cardsData} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {cities.size === 0 ? (
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
