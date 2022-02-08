import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';

import { getDrinkListAction, getDrinkListFailAction, getDrinkListSuccessAction, MenuAction } from '../reducers/menu';
import { DataType } from '../data';

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT;


type resultType = {
    data: DataType[]
}

function getDrinkListApi() {
    console.log('apiHost : ', apiHost);

    const requestUrl = apiHost + ":" + apiPort + "/drinks"
    
    console.log('requestUrl : ', requestUrl);

    return axios.get(requestUrl);
}


function* getDrinkListSaga(action: MenuAction) {
    
    console.log("action: ", action);

    try { 
        const result: resultType = yield call(getDrinkListApi);
        const { data } = result

        console.log('data : ', data);
        
        yield put({
            type: getDrinkListSuccessAction.type,
            payload: data
        })
    } catch (err) {
        console.log("err: ", err);
        yield put({
            type: getDrinkListFailAction.type
        })
    }

}

function* watchGetDrinkListSaga() {
    yield takeLatest(getDrinkListAction, getDrinkListSaga)
}

export default function* menuSaga() {
    yield all([fork(watchGetDrinkListSaga)]);
}