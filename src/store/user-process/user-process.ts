import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { UserData } from '../../types/types';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: {
    email: null,
    avatarUrl: '',
    isPro: false,
    name: '',
    token: '',
  },
};
export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        checkAuthAction.fulfilled,
        (state, action: { payload: { token: string; data: UserData } }) => {
          if (!action.payload.token) {
            state.authorizationStatus = AuthorizationStatus.NoAuth;
            return;
          }
          state.userData = action.payload.data;
          state.authorizationStatus = AuthorizationStatus.Auth;
        }
      )
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
