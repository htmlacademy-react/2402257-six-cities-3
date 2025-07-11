import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction } from '../api-actions';
import { Points } from '../../types/types';
import { getUniqCities } from '../../logic/get-uniq-cities.js';
import { filterOffersByCity } from '../../logic/filter-offers';
import { FIRST_LOAD_CITY } from '../../const';
import { separateFavoritesOffers } from '../../logic/separate-favorites-offers.js';
import { fetchFavoritesOffers } from '../api-actions';

const initialState: OffersData = {
  isOffersDataLoading: false,
  originOffers: [],
  citiesData: [],
  offerList: [],
  hasError: false,
  favoriteOffers: [],
  favoritesIsLoading: false,
};
export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setUniqCities: (state, action: { payload: string[] }) => {
      state.citiesData = action.payload;
    },
    toggleFavoriteOffer(state, action: { payload: string }) {
      if (
        state.favoriteOffers.map((offer) => offer.id).includes(action.payload)
      ) {
        state.favoriteOffers = state.favoriteOffers.filter(
          (offer) => offer.id !== action.payload
        );
      } else {
        state.favoriteOffers.push(
          state.originOffers.find((offer) => offer.id === action.payload)!
        );
      }
    },
  },

  extraReducers(builder) {
    builder.addCase(
      fetchOffersAction.fulfilled,
      (state, action: { payload: Points }) => {
        state.hasError = false;
        state.originOffers = action.payload;
        state.isOffersDataLoading = false;
        state.citiesData = getUniqCities(action.payload);
        state.offerList = filterOffersByCity(action.payload, FIRST_LOAD_CITY);
        state.favoriteOffers = separateFavoritesOffers(action.payload);
      }
    );
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isOffersDataLoading = true;
    });
    builder.addCase(fetchOffersAction.rejected, (state) => {
      state.hasError = true;
    });
    builder.addCase(fetchFavoritesOffers.fulfilled, (state) => {
      state.favoritesIsLoading = false;
    });
    builder.addCase(fetchFavoritesOffers.pending, (state) => {
      state.favoritesIsLoading = true;
    });
    builder.addCase(fetchFavoritesOffers.rejected, (state) => {
      state.hasError = true;
    });
  },
});

export const { toggleFavoriteOffer } = offersData.actions;
