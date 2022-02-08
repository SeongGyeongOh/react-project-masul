import axios from 'axios';
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

type postType = {
  title: string;
  content: string;
};

// 게시글 load
function loadPostDataApi() {
  return axios.get('http://172.20.2.115:6008/boards');
}

function* loadPost() {
  try {
    const result: resultType = yield call(loadPostDataApi);
    const { data } = result;
    console.log(data);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: data,
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
function addPostDataApi(data: postType) {
  return axios.post('http://172.20.2.115:6008/boards', data);
}

function* addPost(action: any) {
  try {
    const data = {
      userId: 'kakao123454',
      title: action.title,
      content: action.content,
    };

    const result: resultType = yield call(addPostDataApi, data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
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
function deletePostDataApi(data: number) {
  return axios.delete(`http://172.20.2.115:6008/boards/${data}`);
}

function* deletePost(action: any) {
  try {
    yield call(deletePostDataApi, action.data); // 삭제
    const result: resultType = yield call(loadPostDataApi);
    const { data } = result;
    console.log(data);

    yield put({
      type: DELETE_POST_SUCCESS,
      data: data,
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
