import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ALCHOLCUP_FAILURE, ALCHOLCUP_REQUEST, ALCHOLCUP_SUCCESS } from '../reducers/alcholcup';
import { Action } from '../../modules/reducers/alcholcup';
import { data } from '../data';

export interface DataType {
  id?: number;
  type?: string;
  name?: string;
  img?: string;
  taste?: string;
  feeling?: string;
  condition?: string;
  description?: string;
}

type resultType = {
  data: DataType[];
};

function addAlcholcupAPI() {
  return data;
}

function* addAlcholcup(action: Action) {
  try {
    const result: resultType = yield call(addAlcholcupAPI);
    yield put({
      type: ALCHOLCUP_SUCCESS,
      data: result,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: ALCHOLCUP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddAlcholData() {
  yield takeLatest(ALCHOLCUP_REQUEST, addAlcholcup);
}

export default function* alcholSaga() {
  yield all([fork(watchAddAlcholData)]);
}
