import {
  logoutFailAction,
  logoutSuccessAction,
  loginSuccessAction,
  LoginAction,
  snsLoginAction,
  logoutAction,
  setNicknameAction,
  checkUserLogin,
  loginStateAction,
} from './../reducers/login';
import { LoginService } from '../../service/loginService';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import UserService from '../../service/userService';
import { ActionType } from 'typesafe-actions';

const loginService = new LoginService();
const userService = new UserService();

// 구글 로그인
function* snsLoginSaga(action: LoginAction) {
  try {
    if (action.payload === 'google') {
      yield call(loginService.googleLogin);
      yield put({
        type: loginSuccessAction.type,
        payload: action.payload,
      });
    }

    if (action.payload === 'kakao') {
      yield call(loginService.kakaoLogin);
      yield put({
        type: loginSuccessAction.type,
        payload: action.payload,
      });
    }
  } catch (err) {
    console.log(err);
  }
}

// 네이버 로그인
function* naverLoginSaga(action: LoginAction) {}

function* setUserNicknameSaga(action: ActionType<typeof setNicknameAction>) {
  try {
    // db에 유저 정보 올리기!!
    const { userId, nickname, snsType } = action.payload;

    if (snsType === 'kakao') {
      window.Kakao.API.request({
        url: '/v1/user/update_profile',
        data: {
          properties: {
            nickname: nickname,
          },
        },
      });
    }

    if (snsType === 'google') {
      loginService.googleUpdateProfile(nickname);
    }
  } catch (err) {
    console.log(err);
  }
}

function* logoutSaga(action: LoginAction) {
  try {
    if (action.payload === 'google') {
      yield call(loginService.googleLogout);
    }
    if (action.payload === 'kakao') {
      yield call(loginService.kakaoLogout);
    }

    yield put({
      type: logoutSuccessAction.type,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: logoutFailAction.type,
    });
  }
}

function* checkUserLoginSaga(action: LoginAction) {
  try {
    const nickname: Promise<string> = yield call(loginService.onAuthChange);
    console.log(nickname);
    yield put({
      type: loginStateAction.type,
      payload: {
        snsType: 'google',
        nickname: nickname,
      },
    });

    if (window.Kakao.Auth.getAccessToken()) {
      const nickname: Promise<string> = yield call(loginService.kakaoCheckNickname);
      console.log(nickname);
      yield put({
        type: loginStateAction.type,
        payload: {
          snsType: 'kakao',
          nickname: nickname,
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
}

export default function* loginSaga() {
  yield takeEvery(snsLoginAction, snsLoginSaga);
  yield takeEvery(logoutAction, logoutSaga);
  yield takeEvery(setNicknameAction, setUserNicknameSaga);
  yield takeEvery(checkUserLogin, checkUserLoginSaga);
}
