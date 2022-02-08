import { action } from 'typesafe-actions';
import produce from 'immer';
import { map } from 'jquery';

// 액션 타입
export const LOAD_POST_REQUEST = 'post/LOAD_POST_REQUEST' as const;
export const LOAD_POST_SUCCESS = 'post/LOAD_POST_SUCCESS' as const;
export const LOAD_POST_FAILURE = 'post/LOAD_POST_FAILURE' as const;

export const ADD_POST_REQUEST = 'post/ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'post/ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'post/ADD_POST_FAILURE' as const;

export const DELETE_POST_REQUEST = 'post/DELETE_POST_REQUEST' as const;
export const DELETE_POST_SUCCESS = 'post/DELETE_POST_SUCCESS' as const;
export const DELETE_POST_FAILURE = 'post/DELETE_POST_FAILURE' as const;

// 액션 생성 함수

// 게시글 생성
export const loadPostRequest = () => {
  return {
    type: LOAD_POST_REQUEST,
  };
};

export const loadPostSuccess = (data: DataProps[]) => {
  return {
    type: LOAD_POST_SUCCESS,
    data: data,
  };
};

export const loadPostFailure = () => {
  return {
    type: LOAD_POST_FAILURE,
  };
};

export const addPostRequest = (title: string, content: string, nickname: string, userId: string) => {
  return {
    type: ADD_POST_REQUEST,
    title: title,
    content: content,
    nickName: nickname,
    userId: userId,
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
export const deletePostRequest = (id: number) => {
  return {
    type: DELETE_POST_REQUEST,
    data: id,
  };
};

export const deletePostSuccess = (data: DataProps[]) => {
  return {
    type: DELETE_POST_SUCCESS,
    data: data,
  };
};

export const deletePostFailure = () => {
  return {
    type: DELETE_POST_FAILURE,
  };
};

// 모든 액션 객체들에 대한 타입 준비
export type DataAction =
  | ReturnType<typeof loadPostRequest>
  | ReturnType<typeof loadPostSuccess>
  | ReturnType<typeof loadPostFailure>
  | ReturnType<typeof addPostRequest>
  | ReturnType<typeof addPostSuccess>
  | ReturnType<typeof addPostFailure>
  | ReturnType<typeof deletePostRequest>
  | ReturnType<typeof deletePostSuccess>
  | ReturnType<typeof deletePostFailure>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의

export type DataProps = {
  id: number;
  title: string;
  content: string;
  nickName: string;
  status?: string;
  created: string;
  updated: string;
  userId: string;
};

export type PostState = {
  data: DataProps[];
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: null;
  deletePostLoading: boolean;
  deletePostDone: boolean;
  deletePostError: null;
  loadPostLoading: boolean;
  loadPostDone: boolean;
  loadPostError: null;
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
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
};
// 리듀서 작성
const post = (state: PostState = initialState, action: DataAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        draft.data = action.data.sort((a, b) => b.id - a.id);
        break;
      case LOAD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
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
        draft.data = action.data.sort((a, b) => b.id - a.id);
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
