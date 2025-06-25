import { createAction } from '@reduxjs/toolkit';
import { SortTypes } from '../const';
import { Points } from '../types/types';
import { AuthorizationStatus, AppRoute } from '../const';

export const changeCity = createAction<string>('changeCity');
export const sortOffers = createAction<SortTypes>('sortOffers');
export const changeSortingType = createAction<SortTypes>('changeSortingType');
export const loadOffers = createAction<Points>('loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'requireAuthorization'
);
export const setError = createAction<string | null>('setError');
export const setOffersDataLoadingStatus = createAction<boolean>(
  'setOffersDataLoadingStatus'
);
export const getFavoritesOffers = createAction<Points>('getFavoritesOffers');
export const setIsFavorite = createAction<string>('setIsFavorite');
export const setUniqCities = createAction<string[]>('setUniqCities');
export const setEmail = createAction<string>('setEmail');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
