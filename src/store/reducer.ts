import { createReducer } from '@reduxjs/toolkit';
import { changeCity, fillOffersList } from './action';
import { Points } from '../types/types';

const initialState = {
  currentCity: 'Paris',
  offerList: [] as Points[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(fillOffersList, (state, action) => {
      state.offerList = action.payload;
    });
});

export { reducer };
