import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FavoritesProcess } from '../../types/state';

const initialState: FavoritesProcess = {
  favoriteOffers: [],
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
});

export const { addFavoriteOffer } = favoriteProcess.actions;
