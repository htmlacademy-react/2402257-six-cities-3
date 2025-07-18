import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCurrentCity = (state: Pick<State, NameSpace.Cities>): string =>
  state[NameSpace.Cities].currentCity;
