import { createReducer } from '@reduxjs/toolkit';
import { changeCity } from './action';
import { filterOffersByCity } from '../logic/offer-list';
import { cardsData } from '../mocks/mock';
import { FIRST_LOAD_CITY } from '../const';

const initialState = {
  currentCity: 'Paris',
  offerList: filterOffersByCity(cardsData, FIRST_LOAD_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;

    state.offerList = filterOffersByCity(cardsData, action.payload);
  });
});

export { reducer };
