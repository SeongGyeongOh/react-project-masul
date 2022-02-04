import produce from 'immer';
import { data, DataType } from '../data';

export type alcholcupProps = {
  alcholcupLists: DataType[];
  alcholLoading: boolean;
  alcholDone: boolean;
  alcholError: string | null;
  likeAlcholLoading: boolean;
  likeAlcholDone: boolean;
  likeAlcholError: string | null;
  data: object;
  error: string | null;
};

export const ALCHOLCUP_REQUEST = 'ALCHOLCUP_REQUEST' as const;
export const ALCHOLCUP_SUCCESS = 'ALCHOLCUP_SUCCESS' as const;
export const ALCHOLCUP_FAILURE = 'ALCHOLCUP_FAILURE' as const;

export const LIKE_ALCHOLCUP_REQUEST = 'LIKE_ALCHOLCUP_REQUEST' as const;
export const LIKE_ALCHOLCUP_SUCCESS = 'LIKE_ALCHOLCUP_SUCCESS' as const;
export const LIKE_ALCHOLCUP_FAILURE = 'LIKE_ALCHOLCUP_FAILURE' as const;

const initialState: alcholcupProps = {
  alcholcupLists: [],
  alcholLoading: false,
  alcholDone: false,
  alcholError: null,
  likeAlcholLoading: false,
  likeAlcholDone: false,
  likeAlcholError: null,
  data: [],
  error: null,
};

const dummyAlcholcup = data.sort(() => Math.random() - 0.5).slice(0, 16);

export type Action =
  | ReturnType<typeof alcholRequestData>
  | ReturnType<typeof alcholSuccessData>
  | ReturnType<typeof alcholFailureData>
  | ReturnType<typeof likeRequestData>
  | ReturnType<typeof likeSuccessData>
  | ReturnType<typeof likeFailureData>;

export const alcholRequestData = () => {
  return {
    type: ALCHOLCUP_REQUEST,
  };
};
export const alcholSuccessData = (data: alcholcupProps) => {
  return {
    type: ALCHOLCUP_SUCCESS,
    data: data,
  };
};
export const alcholFailureData = (error: alcholcupProps) => {
  return {
    type: ALCHOLCUP_FAILURE,
    error: error,
  };
};

export const likeRequestData = () => {
  return {
    type: LIKE_ALCHOLCUP_REQUEST,
  };
};
export const likeSuccessData = (data: alcholcupProps) => {
  return {
    type: LIKE_ALCHOLCUP_SUCCESS,
    data: data,
  };
};
export const likeFailureData = (error: alcholcupProps) => {
  return {
    type: LIKE_ALCHOLCUP_FAILURE,
    error: error,
  };
};

const alcholcup = (state: alcholcupProps = initialState, action: Action) =>
  produce(state, (draft) => {
    const dummyAlcholcup = data.sort(() => Math.random() - 0.5).slice(0, 16);
    switch (action.type) {
      case ALCHOLCUP_REQUEST:
        draft.alcholLoading = true;
        draft.alcholDone = false;
        draft.alcholError = null;
        break;
      case ALCHOLCUP_SUCCESS:
        draft.alcholLoading = false;
        draft.alcholDone = true;
        draft.alcholcupLists = dummyAlcholcup;
        // console.log('reducer: ', (draft.alcholcupLists = data));
        break;
      case ALCHOLCUP_FAILURE:
        draft.alcholLoading = false;
        // draft.alcholError = error;
        break;
      case LIKE_ALCHOLCUP_REQUEST:
        draft.likeAlcholLoading = true;
        draft.likeAlcholDone = false;
        draft.likeAlcholError = null;
        break;
      case LIKE_ALCHOLCUP_SUCCESS:
        // const alchol = draft.alcholcupLists.find((v) => v.id === action.data.PostId);
        // alchol.Likers.push({ id: action.data.UserId });
        draft.likeAlcholLoading = false;
        draft.likeAlcholDone = true;
        break;
      case LIKE_ALCHOLCUP_FAILURE:
        draft.likeAlcholLoading = false;
        // draft.likeAlcholError = action.error;
        break;
        break;
      default:
        break;
    }
  });

export default alcholcup;
