import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Points } from '../../types/types';

export const getOfferList = (state: State): Points =>
  state[NameSpace.Data].offerList;
export const getCitiesData = (state: State): string[] =>
  state[NameSpace.Data].citiesData;
export const getOriginOffers = (state: State): Points =>
  state[NameSpace.Data].originOffers;
export const getIsOffersDataLoading = (state: State): boolean =>
  state[NameSpace.Data].isOffersDataLoading;
