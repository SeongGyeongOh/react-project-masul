export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE' as const;

// 액션 생성 함수
export const addPost = (data: any) => {
  return {
    type: ADD_POST_REQUEST,
    data: data,
  };
};

// 모든 액션 객체들에 대한 타입 준비
export type DataAction = ReturnType<typeof addPost>;

// 상태에서 사용 할 할 일 항목 데이터 타입 정의
type IData = {
  key: number;
  title: string;
  content: string;
  nickName: string;
  date: string;
  heart: number;
};

type DataProps = {
  key: number;
  title: string;
  content: string;
  nickName: string;
  date: string;
  heart: number;
};

type PostState = {
  data: DataProps[];
};

// 초기상태를 선언합니다.
const initialState: PostState = {
  data: [],
};
// 리듀서 작성
function post(state: PostState = initialState, action: DataAction): PostState {
  switch (action.type) {
    case ADD_POST_REQUEST:
    default:
      return state;
  }
}

export default post;
