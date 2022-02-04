import { all, fork, delay, put, takeLatest } from 'redux-saga/effects';
import {
  ALCHOLCUP_FAILURE,
  ALCHOLCUP_REQUEST,
  ALCHOLCUP_SUCCESS,
  LIKE_ALCHOLCUP_FAILURE,
  LIKE_ALCHOLCUP_REQUEST,
  LIKE_ALCHOLCUP_SUCCESS,
} from '../reducers/alcholcup';
import axios from 'axios';
import { data } from '../data';
import { alcholcupProps, Action } from '../../modules/reducers/alcholcup';

function addAlcholcupAPI(data: alcholcupProps) {
  // return axios.Comment(`/api/post/${data.postId}/alcholcup`, data);
  return axios.get('data', data);
}

function* addAlcholcup(action: Action) {
  console.log(action);

  // const dummyAlcholcup = data.sort(() => Math.random() - 0.5).slice(0, 16);
  const temp = [...data];
  const dummyAlcholcup = temp.sort(() => Math.random() - 0.5).slice(0, 16);
  try {
    // const result = yield call(addAlcholcupAPI, action.data);
    yield delay(4500);
    yield put({
      type: ALCHOLCUP_SUCCESS,
      data: dummyAlcholcup,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: ALCHOLCUP_FAILURE,
      error: err.response.data,
    });
  }
}

function likeAlcholAPI(data: alcholcupProps) {
  // return axios.patch(`/post/${data}/like`);
}

function* likeAlchol(action: Action) {
  try {
    // const result = yield call(likeAlcholAPI, action.data);
    yield put({
      type: LIKE_ALCHOLCUP_SUCCESS,
      data: data,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: LIKE_ALCHOLCUP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddAlcholData() {
  yield takeLatest(ALCHOLCUP_REQUEST, addAlcholcup);
}

function* watchLikeAlchol() {
  yield takeLatest(LIKE_ALCHOLCUP_REQUEST, likeAlchol);
}

export default function* alcholSaga() {
  yield all([fork(watchAddAlcholData), fork(watchLikeAlchol)]);
}
