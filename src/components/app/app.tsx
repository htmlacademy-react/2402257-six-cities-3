import MainScreen from '../../pages/main/main-screen';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import LoginScreen from '../../pages/login/login-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';

type AppScreenProps = {
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
  cities: {
    name: string;
    key: number;
  }[];
};

function App({
  welcomeScreenData,
  cardsData,
  cities,
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              welcomeScreenData={welcomeScreenData}
              cardsData={cardsData}
              cities={cities}
            />
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
