import axios, { AxiosResponse } from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from '../reducers/post';
import { DataProps } from '../reducers/post';

type resultType = {
  data: DataProps[];
};

// 게시글 load
function loadPostDataApi() {
  return axios.get('http://172.20.2.115:6007/boards');
}

function* loadPost() {
  try {
    const result: resultType = yield call(loadPostDataApi);
    const { data } = result;
    yield put({
      type: LOAD_POST_SUCCESS,
      data: data[0],
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err,
    });
  }
}

// 게시글추가
function addPostDataApi() {
  //   return axios.get(
  //     "http://openapi.gwanak.go.kr:8088/726475456c66756e36327441554b47/json/GaModelRestaurantDesignate/1/100/"
  //   );
}

function* addPost(action: any) {
  try {
    // const result = yield call(loadDataApi);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      error: err,
    });
  }
}
// 게시글 삭제

function deletePostDataApi() {
  //   return axios.get(
  //     "http://openapi.gwanak.go.kr:8088/726475456c66756e36327441554b47/json/GaModelRestaurantDesignate/1/100/"
  //   );
}

function* deletePost(action: any) {
  try {
    // const result = yield call(loadDataApi);
    console.log(action.data);
    yield put({
      type: DELETE_POST_SUCCESS,
      data: action,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_POST_FAILURE,
      error: err,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchDeletePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchDeletePost), fork(watchLoadPost)]);
}
