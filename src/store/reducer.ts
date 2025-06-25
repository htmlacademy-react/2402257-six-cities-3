import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortingType,
  sortOffers,
  loadOffers,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  getFavoritesOffers,
  setIsFavorite,
  setUniqCities,
  setEmail,
} from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { AuthorizationStatus, FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';
import { separateFavoritesOffers } from '../logic/separate-favorites-offers';
import { Points } from '../types/types';

type InitialState = {
  login: string | null;
  originOffers: Points;
  currentCity: string;
  offerList: Points;
  sorting: SortTypes;
  favoritesOffers: Points;
  citiesData: string[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};
const initialState: InitialState = {
  login: null,
  originOffers: [],
  currentCity: 'Paris',
  offerList: filterOffersByCity([], FIRST_LOAD_CITY),
  sorting: SortTypes.Popular,
  favoritesOffers: [],
  citiesData: [],
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
  builder.addCase(getFavoritesOffers, (state, action) => {
    state.favoritesOffers = separateFavoritesOffers(action.payload);
  });
  builder.addCase(setIsFavorite, (state, action) => {
    state.favoritesOffers = state.originOffers
      .map((offer) => {
        if (offer.id === action.payload) {
          return {
            ...offer,
            isFavorite: !offer.isFavorite,
          };
        }
        return offer;
      })
      .filter((offer) => offer.isFavorite);

    state.originOffers = state.originOffers.map((offer) => {
      if (offer.id === action.payload) {
        return {
          ...offer,
          isFavorite: !offer.isFavorite,
        };
      }
      return offer;
    });

    state.offerList = state.originOffers.filter(
      (offer) => offer.city.name === state.currentCity
    );
  });
  builder.addCase(setUniqCities, (state, action) => {
    state.citiesData = action.payload;
  });
  builder.addCase(setEmail, (state, action) => {
    state.login = action.payload;
  });
});

export { reducer };
