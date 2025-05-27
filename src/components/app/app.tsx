import MainScreen from '../../pages/main/main-screen';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import LoginScreen from '../../pages/login/login-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
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
  cities: {
    name: string;
    key: number;
  }[];
};

function App({
  loggedHeaderData,
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
              loggedHeaderData={loggedHeaderData}
              cardsData={cardsData}
              cities={cities}
            />
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen loggedHeaderData={loggedHeaderData} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen loggedHeaderData={loggedHeaderData} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
