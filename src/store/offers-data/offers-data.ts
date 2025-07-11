import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction } from '../api-actions';
import { Points } from '../../types/types';
import { getUniqCities } from '../../logic/get-uniq-cities.js';
import { filterOffersByCity } from '../../logic/filter-offers';
import { FIRST_LOAD_CITY } from '../../const';

const initialState: OffersData = {
  isOffersDataLoading: false,
  originOffers: [],
  citiesData: [],
  offerList: [],
  hasError: false,
};
export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    setUniqCities: (state, action: { payload: string[] }) => {
      state.citiesData = action.payload;
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
      }
    );
    builder.addCase(fetchOffersAction.pending, (state) => {
      state.isOffersDataLoading = true;
    });
    builder.addCase(fetchOffersAction.rejected, (state) => {
      state.hasError = true;
    });
  },
});
