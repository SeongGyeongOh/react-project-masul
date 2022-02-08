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
  UserType,
} from './../reducers/login';
import { LoginService } from '../../service/loginService';
import { all, fork, put, takeLatest, call, takeEvery } from 'redux-saga/effects';
import UserService from '../../service/userService';
import { ActionType } from 'typesafe-actions';

export type LoginUser = {
  id: number;
  nickname: string;
};
const loginService = new LoginService();
const userService = new UserService();

// 구글 로그인
function* snsLoginSaga(action: LoginAction) {
  try {
    if (action.payload === 'google') {
      const uid: string = yield call(loginService.googleLogin);
      const user: UserType = yield call(userService.getUser, uid);
      if (user === null) {
        yield put({
          type: loginSuccessAction.type,
          payload: uid,
        });
      } else {
        yield put({
          type: loginStateAction.type,
          payload: {
            snsType: 'google',
            nickname: user.nickname,
            userId: user.userId,
          },
        });
      }
    }

    if (action.payload === 'kakao') {
      const uid: string = yield call(loginService.kakaoLogin);
      const user: UserType = yield call(userService.getUser, uid);

      if (user === null) {
        yield put({
          type: loginSuccessAction.type,
          payload: uid,
        });
      } else {
        yield put({
          type: loginStateAction.type,
          payload: {
            snsType: 'kakao',
            nickname: user.nickname,
            userId: user.userId,
          },
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
}

function* setUserNicknameSaga(action: ActionType<typeof setNicknameAction>) {
  try {
    const { uid, userId, nickname } = action.payload;
    loginService.uploadUser(uid, userId, nickname);
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
    if (window.Kakao.Auth.getAccessToken()) {
      const uid: string = yield call(loginService.kakaoCheckNickname);
      const userData: UserType = yield call(userService.getUser, uid);
      yield put({
        type: loginStateAction.type,
        payload: {
          snsType: 'google',
          nickname: userData.nickname,
          userId: userData.userId,
        },
      });
    }

    const uid: string = yield call(loginService.onAuthChange);
    const userData: UserType = yield call(userService.getUser, uid);
    yield put({
      type: loginStateAction.type,
      payload: {
        snsType: 'google',
        nickname: userData.nickname,
        userId: userData.userId,
      },
    });
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
