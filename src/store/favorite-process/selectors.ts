import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Points } from '../../types/types';

export const getFavoriteOffers = (state: State): string[] =>
  state[NameSpace.Favorites].favoriteOffers;
export const getLoadedFavorites = (state: State): Points =>
  state[NameSpace.Favorites].loadedFavorites;

export const getFavoritesIsLoading = (state: State): boolean =>
  state[NameSpace.Favorites].favoritesIsLoading;

export const getHasError = (state: State): boolean =>
  state[NameSpace.Favorites].hasError;
