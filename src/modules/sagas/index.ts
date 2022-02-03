// sagas/index.js
import { all, fork } from 'redux-saga/effects';

import post from './post';
import login from './login';
import alcholcup from './alcholcup';

export default function* rootSaga() {
  yield all([fork(post), fork(login), fork(alcholcup)]);
}
