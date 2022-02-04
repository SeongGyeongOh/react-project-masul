import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { data } from '../data';

import { RECOMMEND_REQUEST, RECOMMEND_SUCCESS, RECOMMEND_FAILURE } from '../reducers/recommend';

// export interface ResponseGenerator {
//   config?: any;
//   data?: string;
//   headers?: any;
//   request?: any;
//   status?: number;
//   statusText?: string;
// }

// function loadDataApi() {
//   return axios.get(`${data}`);
// }

function* loadData() {
  try {
    // const result: ResponseGenerator = yield call(loadDataApi);
    const result = data;
    console.log(result);
    yield put({
      type: RECOMMEND_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: RECOMMEND_FAILURE,
    });
  }
}

function* watchLoadData() {
  yield takeLatest(RECOMMEND_REQUEST, loadData);
}

export default function* recommendSaga() {
  yield all([fork(watchLoadData)]);
}
