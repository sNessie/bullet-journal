import * as types from "./actionType";

const filtersDefaultState = {
  text: ""
};

export const cleanTextFilter = (text = "") => ({
  type: types.CLEAN_TEXT_FILTER,
  text
});

export const setTextFilter = (text = "") => ({
  type: types.SET_TEXT_FILTER,
  text
});

const filtersReducers = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case types.SET_TEXT_FILTER:
      return {
        ...state,
        text: action.text
      };
    case types.CLEAN_TEXT_FILTER:
      return {
        ...filtersDefaultState
      };
    default:
      return state;
  }
};

export default filtersReducers;
