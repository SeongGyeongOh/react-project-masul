import produce from 'immer';
import { action } from 'typesafe-actions';

// export const firebaseConfig = {
//   apiKey: 'AIzaSyDRrAdASG2BR60Rpzl2_vE0EwYgiO1dHa0',
//   authDomain: 'exfirebasedb.firebaseapp.com',
//   databaseURL: 'https://exfirebasedb.firebaseio.com',
//   projectId: 'exfirebasedb',
//   storageBucket: 'exfirebasedb.appspot.com',
//   messagingSenderId: '565903642129',
//   appId: '1:565903642129:web:30c337526f91a6e8c8abb0',
//   measurementId: 'G-FPZNNC8Y09',
// };

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

const login = (state = initialState, action: Action) =>
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

export default login;
