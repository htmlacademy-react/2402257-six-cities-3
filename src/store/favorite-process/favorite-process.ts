import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesProcess } from '../../types/state';
import { fetchFavoritesOffers } from '../api-actions';
import { Points } from '../../types/types';

const initialState: FavoritesProcess = {
  favoriteOffers: [],
  loadedFavorites: [],
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
        return;
      }
      state.favoriteOffers.push(action.payload);
    },
    setIsFavorite: (state, action: { payload: string }) => {
      if (state.favoriteOffers.includes(action.payload)) {
        state.favoriteOffers = state.favoriteOffers.filter(
          (offer) => offer !== action.payload
        );
      } else {
        state.favoriteOffers.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchFavoritesOffers.fulfilled,
      (state, action: { payload: Points }) => {
        state.loadedFavorites = action.payload;
      }
    );
  },
});

export const { addFavoriteOffer } = favoriteProcess.actions;
