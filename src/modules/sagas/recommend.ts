import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { data } from '../data';
import { DataAction, RESULT_REQUEST } from '../reducers/recommend';

import { 
  RECOMMEND_REQUEST,
  RECOMMEND_SUCCESS, 
  RECOMMEND_FAILURE,
  SELECTED_REQUEST, 
  SELECTED_SUCCESS, 
  SELECTED_FAILURE,
} from '../reducers/recommend';


 //recommend_data
function* loadData(action:DataAction) {
  const recomData = [...data];
  try {
    // const result: ResponseGenerator = yield call(loadDataApi);
    yield put({
      type: RECOMMEND_SUCCESS,
      data: recomData,
    });
  } catch (err:any) {
    console.error(err);
    yield put({
      type: RECOMMEND_FAILURE,
      error: err,
    });
  }
}

 //selected_data
function* selData(action:any){
  const typeName = action.typeName;
  let recomData = action.data.filter((v: any)=> v[typeName]===action.typeTest);
  try{
    yield put({
      type: SELECTED_SUCCESS,
      data : recomData,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SELECTED_FAILURE,
      error: err,
    });
  }
}

//result_data
function* resultData(action:any){
    let data = action.data;
    console.log(data)
    try{
      yield put({
        type: SELECTED_SUCCESS,
        data : data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: SELECTED_FAILURE,
        error: err,
      });
    }
}

function* watchLoadData() {
  yield takeLatest(RECOMMEND_REQUEST, loadData);
}

function* watchSelData(){
  yield takeLatest(SELECTED_REQUEST, selData)
}

function* watchresultData(){
  yield takeLatest(RESULT_REQUEST, resultData)
}

export default function* recommendSaga() {
  yield all([fork(watchLoadData),fork(watchSelData),fork(watchresultData)]);
}
