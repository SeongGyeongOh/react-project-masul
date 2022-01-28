import { LoginService } from './../../service/firebase';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import { GOOGLE_LOGIN, NAVER_LOGIN, KAKAO_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, Action } from '../reducers/login';

const login = new LoginService();

function* googleLogin(action: Action) {
  try {
    login.googleLogin();
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAIL,
    });
  }

  login.onAuthChange();
}

function* naverLogin(action: Action) {
  // 네이버 로그인
}

function* kakaoLogin(action: Action) {
  // 카카오 로그인
}

export default function* loginSaga() {
  yield takeEvery(GOOGLE_LOGIN, googleLogin);
  yield takeEvery(NAVER_LOGIN, naverLogin);
  yield takeEvery(KAKAO_LOGIN, kakaoLogin);
}
