import { createAction } from '@reduxjs/toolkit';
import { SortTypes } from '../const';
import { Points } from '../types/types';
import { AuthorizationStatus } from '../const';

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
