import axios from 'axios';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';

import { GOOGLE_LOGIN, NAVER_LOGIN, KAKAO_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from '../reducers/login';

function* login() {
  try {
    // 구글 로그인 처리
    // console.log()
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

function* watchLoadData() {
  yield takeLatest(GOOGLE_LOGIN, login);
}

export default function* loginSaga() {
  yield takeEvery('*', watchLoadData);
}
