import produce from 'immer';
import { action } from 'typesafe-actions';

export type LoginState = {
  isLogin: boolean;
};

const initialState: LoginState = {
  isLogin: false,
};

export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
export const NAVER_LOGIN = 'NAVER_LOGIN';
export const KAKAO_LOGIN = 'KAKAO_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export type Action =
  | { type: 'GOOGLE_LOGIN' }
  | { type: 'NAVER_LOGIN' }
  | { type: 'KAKAO_LOGIN' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_FAIL' }
  | { type: 'LOGOUT' }
  | { type: 'LOGOUT_SUCCESS' }
  | { type: 'LOGOUT_FAIL' };

export const googleLogin = {
  type: GOOGLE_LOGIN,
};

export const logout = {
  type: LOGOUT,
};

const login = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GOOGLE_LOGIN:
      case NAVER_LOGIN:
      case KAKAO_LOGIN:
      case LOGIN_SUCCESS:
        console.log('로그인 리듀서', draft.isLogin);
        draft.isLogin = true;
        break;
      case LOGIN_FAIL:
      case LOGOUT:
      case LOGOUT_SUCCESS:
        draft.isLogin = false;
        break;
      case LOGOUT_FAIL:
      default:
        return state;
    }
  });

export default login;
