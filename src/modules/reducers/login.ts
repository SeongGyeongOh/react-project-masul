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

export const snsLoginAction = createAction('SNS_LOGIN', (snsType: string) => {
  return { payload: snsType };
});
export const loginSuccessAction = createAction('LOGIN_SUCCESS');
export const loginFailAction = createAction('LOGIN_FAIL');
export const logoutAction = createAction('LOGOUT', (snsType: string) => {
  return { payload: snsType };
});

export const setNicknameAction = createAction('SET_NICKNAME', (nickName: string) => {
  return { payload: nickName };
});
export const logoutSuccessAction = createAction('LOGOUT_SUCCESS');
export const logoutFailAction = createAction('LOGOUT_FAIL');

const actions = {
  snsLoginAction,
  loginSuccessAction,
  loginFailAction,
  logoutAction,
  logoutSuccessAction,
  logoutFailAction,
  setNicknameAction,
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
        break;
      case loginFailAction.type:
        break;
      case logoutAction.type:
        break;
      case logoutSuccessAction.type:
        draft.isLogin = false;
        break;
      case logoutFailAction.type:
        break;
      case setNicknameAction.type:
        draft.nickName = action.payload;
        break;
      default:
        return state;
    }
  });

export default login;
