import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, setError } from './action';
import { Points } from '../types/types.js';
import { store } from '../store/store.js';

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

export const clearErrorAction = createAsyncThunk('clearError', () => {
  // почему не просто dispatch(setError(null))?
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});
