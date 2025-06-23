import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  sortOffers,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
} from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { AuthorizationStatus, FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';
import { getFavoritesOffers } from '../logic/get-favorites-offers';
import { getUniqCities } from '../logic/get-uniq-cities';
import { Points } from '../types/types';

type InitialState = {
  originOffers: Points;
  currentCity: string;
  offerList: Points;
  sorting: SortTypes;
  favoritesOffers: Points;
  citiesData: Set<string>;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};
const initialState: InitialState = {
  originOffers: [],
  currentCity: 'Paris',
  offerList: filterOffersByCity([], FIRST_LOAD_CITY),
  sorting: SortTypes.Popular,
  favoritesOffers: getFavoritesOffers([]),
  citiesData: getUniqCities([]),
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
    state.sorting = SortTypes.Popular;
    state.offerList = filterOffersByCity(state.originOffers, action.payload);
  });
  builder.addCase(sortOffers, (state, action) => {
    if (action.payload === SortTypes.Popular) {
      state.offerList = filterOffersByCity(
        state.originOffers,
        state.currentCity
      );
      return;
    }
    state.offerList = sortCurrentOffers(state.offerList, action.payload);
  });
  builder.addCase(changeSortingType, (state, action) => {
    state.sorting = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.originOffers = action.payload;
    state.offerList = filterOffersByCity(state.originOffers, state.currentCity);
  });
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.isOffersDataLoading = action.payload;
  });
});

export { reducer };
