import produce from 'immer';
import { DataType } from '../data';

// 액션 타입
export const RECOMMEND_REQUEST = 'RECOMMEND_REQUEST' as const;
export const RECOMMEND_SUCCESS = 'RECOMMEND_SUCCESS' as const;
export const RECOMMEND_FAILURE = 'RECOMMEND_FAILURE' as const;
export const SELECTED_REQUEST = 'SELECTED_REQUEST' as const;
export const SELECTED_SUCCESS = 'SELECTED_SUCCESS' as const;
export const SELECTED_FAILURE = 'RECOMMEND_FAILURE' as const;
export const RESULT_REQUEST = 'RESULT_REQUEST' as const;
export const RESULT_SUCCESS = 'RESULT_SUCCESS' as const;
export const RESULT_FAILURE = 'RESULT_FAILURE' as const;

// 액션 생성 함수
//추천 데이터
export const recomDataRequest = () => {
  return{
    type:RECOMMEND_REQUEST,
    data:[]
  };
};

export const recomDataSuccess = (data: DataType[])=> {
  return {
    type:RECOMMEND_SUCCESS,
    data: data,
  };
};

export const recomDataFailure = (error:RecomState)=>{
  return{
    type:RECOMMEND_FAILURE,
    error:error,
  };
};

//선택 된 데이터
export const selDataRequest = (typeTest:string,typeName:string, data: DataType[]) => {
  return{
    type:SELECTED_REQUEST,
    typeTest:typeTest,
    typeName:typeName,
    data:data,
  };
};

export const selDataSuccess = (typeTest:string,num:Number,data:DataType[])=> {
  return {
    type:SELECTED_SUCCESS,
    typeTest:typeTest,
    num:num,
    data:data,
  };
};

export const selDataFailure = (error:RecomState)=>{
  return{
    type:SELECTED_FAILURE,
    error:error,
  };
};


//결과
export const reDataRequest = ( data: DataType[]) => {
  return{
    type:RESULT_REQUEST,
    data:data,
  };
};

export const reDataSuccess = (data:DataType[])=> {
  return {
    type:RESULT_SUCCESS,
    data:data,
  };
};

export const reDataFailure = (error:RecomState)=>{
  return{
    type:RESULT_FAILURE,
    error:error,
  };
};


// 모든 액션 객체들에 대한 타입 준비
export type DataAction =
  | ReturnType<typeof recomDataRequest>
  | ReturnType<typeof recomDataSuccess>
  | ReturnType<typeof recomDataFailure>
  | ReturnType<typeof selDataRequest>
  | ReturnType<typeof selDataSuccess>
  | ReturnType<typeof selDataFailure>
  | ReturnType<typeof reDataRequest>
  | ReturnType<typeof reDataSuccess>
  | ReturnType<typeof reDataFailure>

type RecomState = {
  data:DataType[];
  recomData:DataType[],
  recommendList:DataType[],
  resultList:DataType[],
  recomDataLoading:boolean;
  recomDataDone:boolean;
  recomDataError:string | null;
  selDataLoading:boolean;
  selDataDone:boolean;
  selDataError:string | null;
  reDataLoading:boolean;
  reDataDone:boolean;
  reDataError:string | null;
  error: string | null;
}

//초기값
const initialState: RecomState = {
  data:[],
  recomData: [],
  recommendList:[],
  resultList:[],
  recomDataLoading:false,
  recomDataDone:false,
  recomDataError:null,
  selDataLoading:false,
  selDataDone:false,
  selDataError:null,
  reDataLoading:false,
  reDataDone:false,
  reDataError:null,
  error: null,
};

const recommend = (state: RecomState = initialState, action: DataAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECOMMEND_REQUEST:
        draft.recomDataLoading = true;
        draft.recomDataDone = false;
        draft.recomDataError = null;
        break;
      case RECOMMEND_SUCCESS:
        draft.recomDataLoading = false;
        draft.recomDataDone = true;
        draft.recomDataError = null;
        draft.recommendList = action.data;
        break;
      case RECOMMEND_FAILURE:
        draft.recomDataLoading = false;
        draft.recomDataDone = false;
        draft.recomDataError = null;
        break;
      case SELECTED_REQUEST:
        draft.selDataLoading = true;
        draft.selDataDone = false;
        draft.selDataError = null;
        break;
      case SELECTED_SUCCESS:
        draft.selDataLoading = false;
        draft.selDataDone = true;
        draft.selDataError = null;
        draft.recommendList = action.data;
        break;
      case SELECTED_FAILURE:
        draft.selDataLoading = false;
        draft.selDataDone = false;
        draft.selDataError = null;
        break; 
      case RESULT_REQUEST:
        draft.reDataLoading = true;
        draft.reDataDone = false;
        draft.reDataError = null;
        break;
      case RESULT_SUCCESS:
        draft.reDataLoading = false;
        draft.reDataDone = true;
        draft.reDataError = null;
        draft.resultList = action.data;
        break;
      case RESULT_FAILURE:
        draft.reDataLoading = false;
        draft.reDataDone = false;
        draft.reDataError = null;
        break; 
      default:
        return state;
    }
  });

export default recommend;
