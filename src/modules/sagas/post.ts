import { data } from './../data';
import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { DataAction } from '../reducers/post';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';

function loadDataApi() {
  //   return axios.get(
  //     "http://openapi.gwanak.go.kr:8088/726475456c66756e36327441554b47/json/GaModelRestaurantDesignate/1/100/"
  //   );
}

function* postData(action: DataAction) {
  try {
    // const result = yield call(loadDataApi);
    yield put({
      type: ADD_POST_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
    });
  }
}

function* watchLoadData() {
  yield takeLatest(ADD_POST_REQUEST, postData);
}

export default function* postSaga() {
  yield all([fork(watchLoadData)]);
}
