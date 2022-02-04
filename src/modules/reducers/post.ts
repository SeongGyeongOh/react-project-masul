import produce from 'immer';

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
  apiData: [],
  status: false,
};

// 액션 타입
export const LOAD_RESTAURANT_REQUEST = 'LOAD_RESTAURANT_REQUEST';
export const LOAD_RESTAURANT_SUCCESS = 'LOAD_RESTAURANT_SUCCESS';
export const LOAD_RESTAURANT_FAILURE = 'LOAD_RESTAURANT_FAILURE';

// 액션 생성 함수
export const loadData = {
  type: LOAD_RESTAURANT_REQUEST,
};

const post = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_RESTAURANT_REQUEST:
        draft.status = false;
        break;
      case LOAD_RESTAURANT_SUCCESS:
        draft.status = true;
        draft.apiData.unshift();
        break;
      case LOAD_RESTAURANT_FAILURE:
        draft.status = false;
        break;
      default:
        return state;
    }
  });

export default post;
