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

export const removeHabit = ({id} = {}) => ({
  type: 'REMOVE_HABIT',
  id
});

const habitsReducers = (state = habitsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_HABIT':
      return [
        ...state, 
        action.habit
      ];
      case 'REMOVE_HABIT':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};



export default habitsReducers;