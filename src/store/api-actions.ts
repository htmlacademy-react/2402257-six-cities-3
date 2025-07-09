import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { redirectToRoute } from './action';
import {
  Points,
  AuthData,
  UserData,
  DetailedOffer,
  CardComments,
} from '../types/types.js';

import { saveToken, dropToken } from '../services/token.js';
import { AppRoute } from '../const';
import { getToken } from '../services/token.js';

export const fetchOffersAction = createAsyncThunk<
  Points,
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Points>(APIRoute.Offers);
  return data;
});

export const fetchDetailedOffersDataAction = createAsyncThunk<
  {
    detailedOffer: DetailedOffer;
    nearbyOffers: Points;
    comments: CardComments;
  },
  string | undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('fetchOfferData', async (id, { extra: api }) => {
  const { data: detailedOffer } = await api.get<DetailedOffer>(
    `${APIRoute.Offers}/${id}`
  );
  const { data: nearbyOffers } = await api.get<Points>(
    `${APIRoute.Offers}/${id}/nearby`
  );
  const { data: comments } = await api.get<CardComments>(
    `${APIRoute.Comments}/${id}`
  );

  return { detailedOffer, nearbyOffers, comments };
});

export const checkAuthAction = createAsyncThunk<
  { token: string; data: UserData },
  undefined,
  {
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const token = getToken();
  const { data } = await api.get<UserData>(APIRoute.Login);

  return { token, data };
});

export const loginAction = createAsyncThunk<
  UserData,
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
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
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
  dispatch(redirectToRoute(AppRoute.Main));
});

export const postCommentAction = createAsyncThunk<
  { id: string; comment: string; rating: number; user: UserData },
  { id: string; comment: string; rating: number },
  {
    state: State;
    extra: AxiosInstance;
  }
>('comments/post', async ({ id, comment, rating }, { extra: api }) => {
  await api.post(`${APIRoute.Comments}/${id}`, { comment, rating });
  const { data } = await api.get<UserData>(APIRoute.Login);
  return { id, comment, rating, user: data };
});
