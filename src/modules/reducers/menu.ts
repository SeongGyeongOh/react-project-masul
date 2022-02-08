import produce from 'immer';
import { DataType } from '../data';
import { action, ActionType, createAsyncAction, createReducer } from 'typesafe-actions';
import { createAction } from '@reduxjs/toolkit';


export const getDrinkListAction = createAction('GET_DRINK_LIST');
export const getDrinkListSuccessAction = createAction('GET_DRINK_LIST_SUCCESS', (data: DataType[]) => {
    return { payload: data };
  });
export const getDrinkListFailAction = createAction('GET_DRINK_LIST_FAIL');

export type MenuState = {
    data: DataType[],
    isLoading: boolean
};

const initialState: MenuState = {
    data: [],
    isLoading: false
};

const actions = {
    getDrinkListAction,
    getDrinkListSuccessAction,
    getDrinkListFailAction
};

export type MenuAction = ActionType<typeof actions>;

const menu = (state = initialState, action: MenuAction) => 
    produce(state, (draft) => {
        switch (action.type) {
            case getDrinkListAction.type: 
            break;
            case getDrinkListSuccessAction.type:
                draft.data = action.payload
            break;
            case getDrinkListFailAction.type:
            break;
        }
    });

export default menu;