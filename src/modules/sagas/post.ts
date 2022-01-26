import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import { LOAD_RESTAURANT_REQUEST, LOAD_RESTAURANT_SUCCESS, LOAD_RESTAURANT_FAILURE } from '../reducers/post';

function loadDataApi() {
  //   return axios.get(
  //     "http://openapi.gwanak.go.kr:8088/726475456c66756e36327441554b47/json/GaModelRestaurantDesignate/1/100/"
  //   );
}

function* loadData() {
  try {
    // const result = yield call(loadDataApi);
    yield put({
      type: LOAD_RESTAURANT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_RESTAURANT_FAILURE,
    });
  }
}

function* watchLoadData() {
  yield takeLatest(LOAD_RESTAURANT_REQUEST, loadData);
}

export default function* postSaga() {
  yield all([fork(watchLoadData)]);
}
