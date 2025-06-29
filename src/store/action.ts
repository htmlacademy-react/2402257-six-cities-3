import { createAction } from '@reduxjs/toolkit';
import { SortTypes } from '../const';
import { Points, UserData, DetailedOfferData } from '../types/types';
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
export const setUserData = createAction<UserData>('setUserData');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setDetailedOffer =
  createAction<DetailedOfferData>('setDetailedOffer');
export const clearDetailedOfferData = createAction('clearDetailedOfferData');
export const addNewComment = createAction<{
  id: string;
  comment: string;
  rating: number;
}>('addNewComment');
export const setRating = createAction<number>('setRating');
export const setComment = createAction<string>('setComment');
export const setIsCommentPosted = createAction<boolean>('setIsCommentPosted');
