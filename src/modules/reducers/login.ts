import { AxiosError } from 'axios';
import produce from 'immer';
import { action, ActionType, createAsyncAction, createReducer } from 'typesafe-actions';
import { createAction } from '@reduxjs/toolkit';

export type LoginState = {
  isLogin: boolean;
  userId: string;
  snsType: string;
  nickName: string | null;
};

const initialState: LoginState = {
  isLogin: false,
  userId: '',
  snsType: '',
  nickName: null,
};

export type UserType = {
  nickName: string;
  userId: string;
  snsType: string;
};

export const snsLoginAction = createAction('SNS_LOGIN', (snsType: string) => {
  return { payload: snsType };
});
export const loginSuccessAction = createAction('LOGIN_SUCCESS', (userToken: string) => {
  return { payload: userToken };
});
export const loginFailAction = createAction('LOGIN_FAIL');
export const logoutAction = createAction('LOGOUT', (snsType: string) => {
  return { payload: snsType };
});

export const setNicknameAction = createAction('SET_NICKNAME', (nickName: string, userId: string, snsType: string) => {
  const params: UserType = {
    nickName: nickName,
    userId: userId,
    snsType: snsType,
  };

  return {
    payload: params,
  };
});

export const checkUserLogin = createAction('CHECK_USER_LOGIN', (snsType: string, nickName: string) => {
  return {
    payload: {
      snsType: snsType,
      nickName: nickName,
    },
  };
});
export const logoutSuccessAction = createAction('LOGOUT_SUCCESS');
export const logoutFailAction = createAction('LOGOUT_FAIL');

export const actions = {
  snsLoginAction,
  loginSuccessAction,
  loginFailAction,
  logoutAction,
  logoutSuccessAction,
  logoutFailAction,
  setNicknameAction,
  checkUserLogin,
};

export type LoginAction = ActionType<typeof actions>;

const login = (state = initialState, action: LoginAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case snsLoginAction.type:
        draft.snsType = action.payload;
        break;
      case loginSuccessAction.type:
        draft.isLogin = true;
        draft.userId = state.snsType + Date.now();
        break;
      case loginFailAction.type:
        break;
      case logoutAction.type:
        break;
      case logoutSuccessAction.type:
        draft.isLogin = false;
        draft.nickName = null;
        draft.snsType = '';
        break;
      case logoutFailAction.type:
        break;
      case setNicknameAction.type:
        draft.nickName = action.payload.nickName;
        break;
      case checkUserLogin.type:
        draft.isLogin = true;
        draft.nickName = action.payload.nickName;
        draft.snsType = action.payload.snsType;
        break;
      default:
        return state;
    }
  });

export default login;
