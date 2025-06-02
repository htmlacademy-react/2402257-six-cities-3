import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useState } from 'react';

type AppScreenProps = {
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
  cities: {
    name: string;
    key: number;
  }[];
  cardsComments: {
    id: string;
    date: string;
    user: {
      name: string;
      avatarUrl: string;
      isPro: boolean;
    };
    comment: string;
    rating: number;
  }[];
};

function App({
  loggedHeaderData,
  cardsComments,
  cardsData,
  cities,
}: AppScreenProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | number | null>(
    null
  );
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                loggedHeaderData={loggedHeaderData}
                cardsData={cardsData}
                cities={cities}
                activeOfferId={activeOfferId}
                onOfferHover={(id: string | number) => {
                  setActiveOfferId(id);
                }}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferScreen
                loggedHeaderData={loggedHeaderData}
                cardsData={cardsData}
                cardsComments={cardsComments}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen
                  loggedHeaderData={loggedHeaderData}
                  cardsData={cardsData}
                />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
