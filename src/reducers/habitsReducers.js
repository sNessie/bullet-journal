import uuid from 'uuid';
import database from '../config/fbConfig';

const habitsDefaultState = [];

export const addHabit = ( habit ) => ({
  type: 'ADD_HABIT',
  habit
});

export const startAddHabit = (habitData = {}) => {
  return (dispatch) => {
    const {
      name = '',
      date = '',
      times = 0,
      timesRepeat = []
    } = habitData;
    const habit = { name, date, times, timesRepeat };
    database.ref('habits').push(habit).then((ref) => {
      dispatch(addHabit({
        id: ref.key,
        ...habit
      }))
    })
  }
};

export const removeHabit = ({id} = {}) => ({
  type: 'REMOVE_HABIT',
  id
});

export const startRemoveHabits = ({id} = {}) => {
  return dispatch => {
    database
    .ref(`habits/${id}`)
    .remove()
    .then(() => {
      dispatch(removeHabit({ id }));
      });
    };
  };

export const editHabit = (id, updates) => ({
  type: 'EDIT_HABIT',
  id,
  updates
});
export const makeHabit = (id) => ({
  type: 'MAKE_HABIT',
  id
});

export const startMakeHabit = (id, habitId = {}) => {
  return dispatch => {
    database
    .ref("habits")
    .child(`${habitId}/timesRepeat`)
    .orderByChild('id')
    .equalTo(id)
    .once("child_added", function(snapshot) {
      snapshot.ref.update({ ready: true })
    })
    .then(() => {
      dispatch(makeHabit(id));
    });
  };
};

export const setHabits = (habits) => ({
  type: 'SET_HABITS',
  habits
});

export const startSetHabits = () => {
  return dispatch => {
    return database
          .ref('habits')
          .once('value')
          .then(snapshot => {
              const habits = [];

              snapshot.forEach((childSnapshot) => {
                habits.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
                  });
                });
      dispatch(setHabits(habits));
    });
  };
};

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
              t.ready = true;
                return{
                  ...t
                }
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
        case 'SET_HABITS':
        return action.habits;
    default:
      return state;
  }
};



export default habitsReducers;
