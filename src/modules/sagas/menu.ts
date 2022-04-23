import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import { getDrinkListAction, getDrinkListFailAction, getDrinkListSuccessAction, MenuAction } from '../reducers/menu';
import { data, DataType } from '../data';

type resultType = {
  data: DataType[];
};

function getDrinkListApi() {
  return data;
}

function* getDrinkListSaga(action: MenuAction) {
  try {
    const result: resultType = yield call(getDrinkListApi);

    yield put({
      type: getDrinkListSuccessAction.type,
      payload: result,
    });
  } catch (err) {
    console.log('err: ', err);
    yield put({
      type: getDrinkListFailAction.type,
    });
  }
}

function* watchGetDrinkListSaga() {
  yield takeLatest(getDrinkListAction, getDrinkListSaga);
}

export default function* menuSaga() {
  yield all([fork(watchGetDrinkListSaga)]);
}
