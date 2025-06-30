import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import {
  getFavoritesOffers,
  loadOffers,
  setError,
  setOffersDataLoadingStatus,
  setUniqCities,
  requireAuthorization,
  redirectToRoute,
  setUserData,
  setDetailedOffer,
  addNewComment,
  setIsCommentPosted,
} from './action';
import {
  Points,
  AuthData,
  UserData,
  DetailedOffer,
  CardComments,
} from '../types/types.js';
import { store } from '../store/store.js';
import { getUniqCities } from '../logic/get-uniq-cities.js';
import { saveToken, dropToken } from '../services/token.js';
import { AuthorizationStatus, AppRoute } from '../const';
import { getToken } from '../services/token.js';

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { dispatch, extra: api }) => {
  dispatch(setOffersDataLoadingStatus(true));
  const { data } = await api.get<Points>(APIRoute.Offers);
  dispatch(getFavoritesOffers(data));
  dispatch(setOffersDataLoadingStatus(false));
  dispatch(setUniqCities(getUniqCities(data)));
  dispatch(loadOffers(data));
});

export const fetchDetailedOffersDataAction = createAsyncThunk<
  void,
  string | undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('fetchOfferData', async (id, { dispatch, extra: api }) => {
  const { data: detailedOffer } = await api
    .get<DetailedOffer>(`${APIRoute.Offers}/${id}`)
    .catch(() => {
      dispatch(redirectToRoute(AppRoute.NotFound));
      throw new Error();
    });
  const { data: nearbyOffers } = await api.get<Points>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: comments } = await api.get<CardComments>(
    `${APIRoute.Comments}/${id}`
  );
  dispatch(setDetailedOffer({ detailedOffer, nearbyOffers, comments }));
});

export const clearErrorAction = createAsyncThunk('clearError', () => {
  // почему не просто dispatch(setError(null))?
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const token = getToken();
    if (!token) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      return;
    }
    const { data } = await api.get<UserData>(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(redirectToRoute(AppRoute.Main));
});

export const postCommentAction = createAsyncThunk<
  void,
  { id: string; comment: string; rating: number },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'comments/post',
  async ({ id, comment, rating }, { dispatch, extra: api }) => {
    dispatch(setIsCommentPosted(false));
    await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
    dispatch(setIsCommentPosted(true));
    dispatch(addNewComment({ id, comment, rating }));
  }
);
