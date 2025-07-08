import { NameSpace, SortTypes } from '../../const';
import { State } from '../../types/state';

export const getSorting = (state: State): SortTypes =>
  state[NameSpace.Sort].sorting;
