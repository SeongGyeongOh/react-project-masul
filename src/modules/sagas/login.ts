import { ggLogin } from './../../service/loginService';
import { useDispatch } from 'react-redux';
import { LoginService } from '../../service/loginService';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import {
  GOOGLE_LOGIN,
  NAVER_LOGIN,
  KAKAO_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  Action,
  LOGOUT,
  LOGIN_STATE_CHANGED,
} from '../reducers/login';
import { async } from '@firebase/util';

const loginService = new LoginService();

function* googleLogin(action: Action) {
  try {
    yield call(ggLogin);
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAIL,
    });
  }
}

function* kakaoLogin(action: Action) {
  try {
    loginService.kakaoLogin();
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOGIN_FAIL,
    });
  }
}

function* naverLogin(action: Action) {
  // 네이버 로그인
}

function* logout(action: Action) {
  try {
    loginService.onLogout();
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: LOGOUT_FAIL,
    });
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGOUT, logout);
  yield takeEvery(GOOGLE_LOGIN, googleLogin);
  yield takeEvery(NAVER_LOGIN, naverLogin);
  yield takeEvery(KAKAO_LOGIN, kakaoLogin);
}
