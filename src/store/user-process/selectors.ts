import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/types';

export const getUserData = (state: Pick<State, NameSpace.User>): UserData =>
  state[NameSpace.User].userData;
export const getAuthorizationStatus = (
  state: Pick<State, NameSpace.User>
): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
