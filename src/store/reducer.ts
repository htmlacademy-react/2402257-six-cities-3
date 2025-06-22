import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  sortOffers,
  loadOffers,
  requireAuthorization,
} from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { cardsData } from '../mocks/mock';
import { AuthorizationStatus, FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';
import { getFavoritesOffers } from '../logic/get-favorites-offers';
import { getUniqCities } from '../logic/get-uniq-cities';

const initialState = {
  currentCity: 'Paris',
  offerList: filterOffersByCity([], FIRST_LOAD_CITY),
  sorting: SortTypes.Popular,
  favoritesOffers: getFavoritesOffers([]),
  citiesData: getUniqCities([]),
  authorizationStatus: AuthorizationStatus.Unknown,
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
});

export { reducer };
