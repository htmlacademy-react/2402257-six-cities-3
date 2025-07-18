import { getUserData } from './selectors';
import { AuthorizationStatus, NameSpace } from '../../const';

describe('UserProcess: Selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {
        email: 'gidlos55@gmail.com',
        avatarUrl: '/src/img/avatar.jpg',
        isPro: false,
        name: 'Anderson Anderson',
        token: 'ssdc!sdc2342^13433vh2j42v34vj23123_',
      },
    },
  };

  it('should return userData', () => {
    const userData = state[NameSpace.User].userData;
    const result = getUserData(state);

    expect(result).toEqual(userData);
  });

  it('should return authorization status', () =>
    expect(state[NameSpace.User].authorizationStatus).toMatch(
      AuthorizationStatus.Unknown
    ));
});
