import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { ALCHOLCUP_FAILURE, ALCHOLCUP_REQUEST, ALCHOLCUP_SUCCESS } from '../reducers/alcholcup';
import axios from 'axios';
import { Action } from '../../modules/reducers/alcholcup';

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
  return axios.get(`http://172.20.2.115:6008/drinks`);
}

function* addAlcholcup(action: Action) {
  try {
    const result: resultType = yield call(addAlcholcupAPI);
    // const { data } = result;
    // console.log(data);
    // console.log(action.data);
    yield put({
      type: ALCHOLCUP_SUCCESS,
      data: result.data,
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
