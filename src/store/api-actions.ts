import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { loadOffers } from './action';
import { Points } from '../types/types.js';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Points>(APIRoute.Offers);
  dispatch(loadOffers(data));
});
