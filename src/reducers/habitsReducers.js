import uuid from 'uuid';

const habitsDefaultState = [];

export const addHabit = (
  {
    name = '',
    date = '',
    times = 0,
    timesRepeat = []
  } = {}
  ) => ({
  type: 'ADD_HABIT',
  habit: {
    id:uuid(),
    name,
    date,
    times,
    timesRepeat
  }
});

export const removeHabit = ({id} = {}) => ({
  type: 'REMOVE_HABIT',
  id
});

export const editHabit = (id, updates) => ({
  type: 'EDIT_HABIT',
  id,
  updates
});
export const makeHabit = (id) => ({
  type: 'MAKE_HABIT',
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
      case 'EDIT_HABIT':
      return state.map((habit)=>{
        if (habit.id === action.id){
          return {
            ...habit,
            ...action.updates
          }
        } else {
          return habit;
        }
        });
      case 'MAKE_HABIT':
      return state.map((habit)=>{ 
        habit.timesRepeat.map((t) =>{
            if (t.id === action.id){
              t.ready = !t.ready;
                return console.log({
                  ...t
                }) 
            }else{
              return{
                ...t
              }
            }}
            )
        return {
            ...habit
          }
        });
    default:
      return state;
  }
};



export default habitsReducers;