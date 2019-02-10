import uuid from 'uuid';

const habitsDefaultState = [];

export const addHabit = (
  {
    name = '', 
    date = '', 
    times = 0
  } = {}
  ) => ({
  type: 'ADD_HABIT', 
  habit: {
    id:uuid(), 
    name, 
    date, 
    times
  }
});

const habitsReducers = (state = habitsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state, 
        action.habit
      ];
    default:
      return state;
  }
};



export default habitsReducers;