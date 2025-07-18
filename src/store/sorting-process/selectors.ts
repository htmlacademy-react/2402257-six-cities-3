import { NameSpace, SortTypes } from '../../const';
import { State } from '../../types/state';

export const getSorting = (state: Pick<State, NameSpace.Sort>): SortTypes =>
  state[NameSpace.Sort].sorting;
