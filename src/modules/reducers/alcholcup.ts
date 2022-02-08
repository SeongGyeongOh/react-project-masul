import produce from 'immer';
import { DataType } from '../sagas/alcholcup';

export type alcholcupProps = {
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
  alcholLoading: false,
  alcholDone: false,
  alcholError: null,
  data: [],
  error: '',
};

export type Action =
  | ReturnType<typeof alcholRequestData>
  | ReturnType<typeof alcholSuccessData>
  | ReturnType<typeof alcholFailureData>;

export const alcholRequestData = () => {
  return {
    type: ALCHOLCUP_REQUEST,
  };
};

export const alcholSuccessData = (data: DataType[]) => {
  return {
    type: ALCHOLCUP_SUCCESS,
    data,
  };
};

export const alcholFailureData = (error: string) => {
  return {
    type: ALCHOLCUP_FAILURE,
    error,
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
        draft.data = action.data;
        break;
      case ALCHOLCUP_FAILURE:
        draft.alcholLoading = false;
        draft.alcholError = action.error;
        break;
      default:
        break;
    }
  });

export default alcholcup;
