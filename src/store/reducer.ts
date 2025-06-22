import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  sortOffers,
  loadOffers,
  requireAuthorization,
  setError,
} from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { cardsData } from '../mocks/mock';
import { AuthorizationStatus, FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';
import { getFavoritesOffers } from '../logic/get-favorites-offers';
import { getUniqCities } from '../logic/get-uniq-cities';
import { Points } from '../types/types';

type InitialState = {
  currentCity: string;
  offerList: Points;
  sorting: SortTypes;
  favoritesOffers: Points;
  citiesData: Set<string>;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
};
const initialState: InitialState = {
  currentCity: 'Paris',
  offerList: filterOffersByCity([], FIRST_LOAD_CITY),
  sorting: SortTypes.Popular,
  favoritesOffers: getFavoritesOffers([]),
  citiesData: getUniqCities([]),
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
    state.sorting = SortTypes.Popular;
    state.offerList = filterOffersByCity(cardsData, action.payload);
  });
  builder.addCase(sortOffers, (state, action) => {
    if (action.payload === SortTypes.Popular) {
      state.offerList = filterOffersByCity(cardsData, state.currentCity);
      return;
    }
    state.offerList = sortCurrentOffers(state.offerList, action.payload);
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sorting = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offerList = action.payload;
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
