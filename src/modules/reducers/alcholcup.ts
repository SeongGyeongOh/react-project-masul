import produce from 'immer';
import { data, DataType } from '../data';

export type alcholcupProps = {
  // alcholcupLists: DataType[];
  alcholLoading: boolean;
  alcholDone: boolean;
  alcholError: string | null;
  data: DataType[];
  error: string | null;
};

export const ALCHOLCUP_REQUEST = 'ALCHOLCUP_REQUEST' as const;
export const ALCHOLCUP_SUCCESS = 'ALCHOLCUP_SUCCESS' as const;
export const ALCHOLCUP_FAILURE = 'ALCHOLCUP_FAILURE' as const;

const initialState: alcholcupProps = {
  // alcholcupLists: [],
  alcholLoading: false,
  alcholDone: false,
  alcholError: null,
  data: [],
  error: null,
};
// const dataRandom = [...data.sort(() => Math.random() - 0.5).slice(0, 16)];

export type Action =
  | ReturnType<typeof alcholRequestData>
  | ReturnType<typeof alcholSuccessData>
  | ReturnType<typeof alcholFailureData>;

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

// console.log(alcholSuccessData());

export const alcholFailureData = (error: alcholcupProps) => {
  return {
    type: ALCHOLCUP_FAILURE,
    error: error,
  };
};

const alcholcup = (state: alcholcupProps = initialState, action: Action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ALCHOLCUP_REQUEST:
        draft.alcholLoading = true;
        draft.alcholDone = false;
        draft.alcholError = null;
        break;
      case ALCHOLCUP_SUCCESS:
        draft.alcholLoading = false;
        draft.alcholDone = true;
        draft.data = data;
        // console.log('reducer: ', (draft.alcholcupLists = data));
        break;
      case ALCHOLCUP_FAILURE:
        draft.alcholLoading = false;
        // draft.alcholError = error;
        break;
      default:
        break;
    }
  });

export default alcholcup;
