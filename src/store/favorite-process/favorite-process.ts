import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesProcess } from '../../types/state';
import { fetchFavoritesOffers } from '../api-actions';
import { Points } from '../../types/types';

const initialState: FavoritesProcess = {
  favoriteOffers: [],
  loadedFavorites: [],
  favoritesIsLoading: false,
  hasError: false,
};
export const favoriteProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    addFavoriteOffer: (state, action: { payload: string }) => {
      if (state.favoriteOffers.includes(action.payload)) {
        state.favoriteOffers = state.favoriteOffers.filter(
          (offer) => offer !== action.payload
        );
        state.loadedFavorites = state.loadedFavorites.filter(
          (offer) => offer.id !== action.payload
        );
        return;
      }
      state.favoriteOffers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFavoritesOffers.fulfilled,
      (state, action: { payload: Points }) => {
        state.loadedFavorites = action.payload;
        state.favoritesIsLoading = false;
      }
    );
    builder.addCase(fetchFavoritesOffers.pending, (state) => {
      state.favoritesIsLoading = true;
    });
    builder.addCase(fetchFavoritesOffers.rejected, (state) => {
      state.hasError = true;
    });
  },
});

export const { addFavoriteOffer } = favoriteProcess.actions;
