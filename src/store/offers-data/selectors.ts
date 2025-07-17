import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Points } from '../../types/types';

export const getOfferList = (state: Pick<State, NameSpace.Data>): Points =>
  state[NameSpace.Data].offerList;
export const getCitiesData = (state: Pick<State, NameSpace.Data>): string[] =>
  state[NameSpace.Data].citiesData;
export const getOriginOffers = (state: Pick<State, NameSpace.Data>): Points =>
  state[NameSpace.Data].originOffers;
export const getIsOffersDataLoading = (
  state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getHasError = (state: Pick<State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].hasError;
export const getFavoriteOffers = (state: Pick<State, NameSpace.Data>): Points =>
  state[NameSpace.Data].favoriteOffers;
export const getFavoritesIsLoading = (
  state: Pick<State, NameSpace.Data>
): boolean => state[NameSpace.Data].favoritesIsLoading;
