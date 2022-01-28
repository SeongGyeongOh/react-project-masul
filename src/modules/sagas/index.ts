// sagas/index.js
import { all, fork } from 'redux-saga/effects';

import post from './post';
import login from './login';

export default function* rootSaga() {
  yield all([fork(post), login()]);
}
