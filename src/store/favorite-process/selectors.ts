import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getFavoriteOffers = (state: State): string[] =>
  state[NameSpace.Favorites].favoriteOffers;
