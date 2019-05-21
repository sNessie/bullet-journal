import * as types from "./actionType";

const dashboardDefaultState = {};

export const amountTodo = amount => ({
  type: types.AMOUNT_TODO,
  amount
});

const dashboardReducers = (state = dashboardDefaultState, action) => {
  switch (action.type) {
    case types.AMOUNT_TODO:
      return { ...state, todoAmount: action.amount };
    default:
      return state;
  }
};

export default dashboardReducers;
