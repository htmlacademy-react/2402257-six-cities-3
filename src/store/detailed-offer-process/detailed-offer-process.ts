import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DetailedOfferProcess } from '../../types/state';
import { DetailedOfferData } from '../../types/types';
import { fetchDetailedOffersDataAction } from '../api-actions';
const initialState: DetailedOfferProcess = {
  detailedOfferData: null,
  isLoadingDetailedOffer: false,
};
export const detailedOfferProcess = createSlice({
  name: NameSpace.DetailedOffer,
  initialState,
  reducers: {
    setDetailedOffer: (state, action: { payload: DetailedOfferData }) => {
      state.detailedOfferData = action.payload;
    },
    clearDetailedOfferData: (state) => {
      state.detailedOfferData = null;
      state.isLoadingDetailedOffer = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        fetchDetailedOffersDataAction.fulfilled,
        (state, action: { payload: DetailedOfferData }) => {
          state.detailedOfferData = action.payload;
          state.isLoadingDetailedOffer = false;
        }
      )
      .addCase(fetchDetailedOffersDataAction.pending, (state) => {
        state.isLoadingDetailedOffer = true;
      })
      .addCase(fetchDetailedOffersDataAction.rejected, () => {
        //dispatch(redirectToRoute(AppRoute.NotFound)) ??
      });
  },
});

export const { setDetailedOffer, clearDetailedOfferData } =
  detailedOfferProcess.actions;
