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
import { getUniqueCities } from '../../logic/header-cities';
import {
  Points,
  CardComments,
  DetailedOffer,
  OffersNearby,
} from '../../types/types';
import { useAppSelector } from '../../hooks';

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
  offersNearby: OffersNearby[];
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

  const cards = useAppSelector((state) => state.offerList);
  const currentCityName = useAppSelector((state) => state.currentCity);

  const currentCityData = getUniqueCities(cardsData).filter(
    (city) => city.name === currentCityName
  )[0];
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
                cardsData={cards}
                cities={cities}
                activeOfferId={activeOfferId}
                onOfferHover={(id: string | number) => {
                  setActiveOfferId(id);
                }}
                pageType={PageType.Main}
                favoritesCount={favoritesCount}
                currentCityData={currentCityData}
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
                  cardsData={cardsData}
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
