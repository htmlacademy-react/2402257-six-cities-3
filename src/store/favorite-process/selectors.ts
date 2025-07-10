import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Points } from '../../types/types';

export const getFavoriteOffers = (state: State): string[] =>
  state[NameSpace.Favorites].favoriteOffers;
export const getLoadedFavorites = (state: State): Points =>
  state[NameSpace.Favorites].loadedFavorites;
