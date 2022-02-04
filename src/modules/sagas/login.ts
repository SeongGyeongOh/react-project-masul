import {
  logoutFailAction,
  logoutSuccessAction,
  loginSuccessAction,
  LoginAction,
  snsLoginAction,
  logoutAction,
  setNicknameAction,
} from './../reducers/login';
import { useDispatch } from 'react-redux';
import { LoginService } from '../../service/loginService';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import UserService from '../../service/userService';

type UserType = {
  nickName: string;
  userId: string;
  snsType: string;
};
const loginService = new LoginService();
const userService = new UserService();

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

function* setUserNicknameSaga(action: LoginAction) {
  try {
    // db에 유저 정보 올리기!!
    const payload = action.payload?.valueOf();
    console.log(payload);
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

export default function* loginSaga() {
  yield takeEvery(snsLoginAction, snsLoginSaga);
  yield takeEvery(logoutAction, logoutSaga);
  yield takeEvery(setNicknameAction, setUserNicknameSaga);
}
