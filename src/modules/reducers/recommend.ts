import produce from 'immer';
import { data } from '../data';

//초기값
const initialState = {
  recomData: data,
  // initial state == 데이터(100개)
  status: false,
};

// 액션 타입
export const RECOMMEND_REQUEST = 'RECOMMEND_REQUEST';
export const RECOMMEND_SUCCESS = 'RECOMMEND_SUCCESS';
export const RECOMMEND_FAILURE = 'RECOMMEND_FAILURE';

// 액션 생성 함수
export const loadData = {
  type: RECOMMEND_REQUEST,
};

const recommend = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECOMMEND_REQUEST:
        draft.status = false;
        break;
      case RECOMMEND_SUCCESS:
        draft.status = true;
        draft.recomData.unshift();
        break;
      case RECOMMEND_FAILURE:
        draft.status = false;
        break;
      default:
        return state;
    }
  });

export default recommend;
