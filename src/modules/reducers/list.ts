import produce from 'immer';
import { action } from 'typesafe-actions';

const initialState = {
  isLogin: false,
};

export const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
export const NAVER_LOGIN = 'NAVER_LOGIN';
export const KAKAO_LOGIN = 'KAKAO_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

type Action =
  | { type: 'GOOGLE_LOGIN' }
  | { type: 'NAVER_LOGIN' }
  | { type: 'KAKAO_LOGIN' }
  | { type: 'LOGIN_SUCCESS' }
  | { type: 'LOGIN_FAIL' };

export const googleLogin = {
  type: GOOGLE_LOGIN,
};

const list = (state = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GOOGLE_LOGIN:
        break;
      case NAVER_LOGIN:
        break;
      case KAKAO_LOGIN:
        break;
      case LOGIN_SUCCESS:
        draft.isLogin = true;
        break;
      case LOGIN_FAIL:
        break;
    }
  });

export default list;
