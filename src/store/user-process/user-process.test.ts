import { AuthorizationStatus } from '../../const';
import { userProcess } from './user-process';
import { loginAction } from '../api-actions';

describe('UserProcess : Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {
        email: 'asdasd@asdasd.com',
        avatarUrl: '/src/img/avatar.jpg',
        isPro: false,
        name: 'Adam',
        token: '12d!_ss..@1§',
      },
    };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return default initial state with empty action and undefined', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {
        email: null,
        avatarUrl: '',
        isPro: false,
        name: '',
        token: '',
      },
    };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set default "userData" with "loginAction"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: {
        email: null,
        avatarUrl: '',
        isPro: false,
        name: '',
        token: '',
      },
    };

    const result = userProcess.reducer(undefined, loginAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "userData" and "authorizationStatus" with "loginAction.fulfilled"', () => {
    const userData = {
      email: 'asdasd@asdasd.com',
      avatarUrl: '/src/img/avatar.jpg',
      isPro: false,
      name: 'Adam',
      token: '12d!_ss..@1§',
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userData,
    };

    const result = userProcess.reducer(
      {
        authorizationStatus: AuthorizationStatus.Unknown,
        userData: {
          email: null,
          avatarUrl: '',
          isPro: false,
          name: '',
          token: '',
        },
      },
      loginAction.fulfilled(userData, '', {
        login: 'test@test.com',
        password: 'test',
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "authorizationStatus" to "NoAuth" with "loginAction.rejected"', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userData: {
        email: null,
        avatarUrl: '',
        isPro: false,
        name: '',
        token: '',
      },
    };

    const result = userProcess.reducer(
      undefined,
      loginAction.rejected(null, '', {
        login: 'test@test.com',
        password: 'test',
      })
    );

    expect(result).toEqual(expectedState);
  });
});
