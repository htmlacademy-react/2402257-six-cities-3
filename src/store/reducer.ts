import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers } from './action';
import { filterOffersByCity } from '../logic/filter-offers';
import { cardsData } from '../mocks/mock';
import { FIRST_LOAD_CITY, SortTypes } from '../const';
import { sortCurrentOffers } from '../logic/sort-offers';

const initialState = {
  currentCity: 'Paris',
  offerList: filterOffersByCity(cardsData, FIRST_LOAD_CITY),
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;

    state.offerList = filterOffersByCity(cardsData, action.payload);
  });
  builder.addCase(sortOffers, (state, action) => {
    if (action.payload === SortTypes.Popular) {
      state.offerList = cardsData;
      return;
    }
    state.offerList = sortCurrentOffers(state.offerList, action.payload);
  });
});

export { reducer };
