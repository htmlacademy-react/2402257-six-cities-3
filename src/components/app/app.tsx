import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, PageType } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useState } from 'react';
import { Points, CardComments, DetailedOffer } from '../../types/types';

type AppScreenProps = {
  loggedHeaderData: {
    email: string;
  };
  cardsData: Points;
  cities: {
    name: string;
    key: number;
  }[];
  cardsComments: CardComments;
  offersData: DetailedOffer[];
  offersNearby: Points;
};

function App({
  loggedHeaderData,
  cardsComments,
  cardsData,
  cities,
  offersData,
  offersNearby,
}: AppScreenProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | number | null>(
    null
  );
  //prettier-ignore
  const favoritesCount = cardsData.filter((card) => card.isFavorite).length;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                loggedHeaderData={loggedHeaderData}
                cities={cities}
                activeOfferId={activeOfferId}
                onOfferHover={(id: string | number) => {
                  setActiveOfferId(id);
                }}
                pageType={PageType.Main}
                favoritesCount={favoritesCount}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Offer}
            element={
              <OfferScreen
                loggedHeaderData={loggedHeaderData}
                cardsComments={cardsComments}
                offerData={offersData[3]}
                offersNearby={offersNearby}
                authorizationStatus={AuthorizationStatus.Auth}
                favoritesCount={favoritesCount}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreen
                  loggedHeaderData={loggedHeaderData}
                  favoritesCount={favoritesCount}
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
