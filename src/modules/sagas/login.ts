import {
  logoutFailAction,
  logoutSuccessAction,
  loginSuccessAction,
  LoginAction,
  snsLoginAction,
  logoutAction,
} from './../reducers/login';
import { useDispatch } from 'react-redux';
import { LoginService } from '../../service/loginService';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';

const loginService = new LoginService();

// 구글 로그인
function* snsLoginSaga(action: LoginAction) {
  try {
    if (action.payload === 'google') {
      yield call(loginService.googleLogin);
    }

    if (action.payload === 'kakao') {
      yield call(loginService.kakaoLogin);
    }

    yield put({
      type: loginSuccessAction.type,
    });
  } catch (err) {
    console.log(err);
  }
}

// 네이버 로그인
function* naverLoginSaga(action: LoginAction) {}

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

export default function* loginSaga() {
  yield takeEvery(snsLoginAction, snsLoginSaga);
  yield takeEvery(logoutAction, logoutSaga);
}
