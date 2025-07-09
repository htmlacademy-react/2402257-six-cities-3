import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, PageType } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main/main-screen';
import LoginScreen from '../../pages/login/login-screen';
import OfferScreen from '../../pages/offer/offer-screen';
import FavoritesScreen from '../../pages/favorites/favorites-screen';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading/loading-screen';
import HistoryRouter from '../history-router/history-route';
import browserHistory from '../../browser-history';
import { getIsOffersDataLoading } from '../../store/offers-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
type AppScreenProps = {
  cities: {
    name: string;
    key: number;
  }[];
};

function App({ cities }: AppScreenProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | number | null>(
    null
  );

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (
    authorizationStatus === AuthorizationStatus.Unknown ||
    isOffersDataLoading
  ) {
    return <LoadingScreen size={60} color="#4481C3" />;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainScreen
                cities={cities}
                activeOfferId={activeOfferId}
                onOfferHover={(id: string | number) => {
                  setActiveOfferId(id);
                }}
                pageType={PageType.Main}
              />
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen authorizationStatus={authorizationStatus} />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
