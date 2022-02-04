import produce from 'immer';

export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE' as const;

export const DELETE_POST_REQUEST = 'post/DELETE_POST_REQUEST' as const;
export const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS' as const;
export const DELETE_POST_FAILURE = 'post/DELETE_POST_FAILURE' as const;
// 액션 타입
export const LOAD_RESTAURANT_REQUEST = 'LOAD_RESTAURANT_REQUEST';
export const LOAD_RESTAURANT_SUCCESS = 'LOAD_RESTAURANT_SUCCESS';
export const LOAD_RESTAURANT_FAILURE = 'LOAD_RESTAURANT_FAILURE';

// 액션 생성 함수

// 게시글 생성
export const addPostRequest = (data: DataProps) => {
  return {
    type: ADD_POST_REQUEST,
    data: data,
  };
};

export const addPostSuccess = (data: DataProps) => {
  return {
    type: ADD_POST_SUCCESS,
    data: data,
  };
};

export const addPostFailure = (data: DataProps) => {
  return {
    type: ADD_POST_FAILURE,
  };
};

// 게시글 삭제
export const deletePostRequest = (key: number) => {
  return {
    type: DELETE_POST_REQUEST,
    data: key,
  };
};

export const deletePostSuccess = (key: number) => {
  return {
    type: DELETE_POST_SUCCESS,
    data: key,
  };
};

export const deletePostFailure = () => {
  return {
    type: DELETE_POST_FAILURE,
  };
};

// 모든 액션 객체들에 대한 타입 준비
export type DataAction =
  | ReturnType<typeof addPostRequest>
  | ReturnType<typeof addPostSuccess>
  | ReturnType<typeof addPostFailure>
  | ReturnType<typeof deletePostRequest>
  | ReturnType<typeof deletePostSuccess>
  | ReturnType<typeof deletePostFailure>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의

export type DataProps = {
  key: number;
  title: string;
  content: string;
  nickName: string;
  date: string;
};

type PostState = {
  data: DataProps[];
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: null;
  deletePostLoading: boolean;
  deletePostDone: boolean;
  deletePostError: null;
};

// 초기상태를 선언합니다.
const initialState: PostState = {
  data: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
};
// 리듀서 작성
const post = (state: PostState = initialState, action: DataAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        draft.data.unshift(action.data);
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case DELETE_POST_REQUEST:
        draft.deletePostLoading = true;
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;
      case DELETE_POST_SUCCESS:
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        draft.deletePostError = null;
        draft.data = draft.data.filter((v) => v.key === action.data);
        break;
      case DELETE_POST_FAILURE:
        draft.deletePostLoading = false;
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;
      default:
        break;
    }
  });

export default post;
