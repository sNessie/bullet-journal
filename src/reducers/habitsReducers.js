import database from "../config/fbConfig";
import * as types from "./actionType";

const habitsDefaultState = [];

export const addHabit = habit => ({
  type: types.ADD_HABIT,
  habit
});

export const startAddHabit = (habitData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { name = "", date = "", times = 0, timesRepeat = [] } = habitData;
    const habit = { name, date, times, timesRepeat };
    database
      .ref(`users/${uid}/habits`)
      .push(habit)
      .then(ref => {
        dispatch(
          addHabit({
            id: ref.key,
            ...habit
          })
        );
      });
  };
};

export const removeHabit = ({ id } = {}) => ({
  type: types.REMOVE_HABIT,
  id
});

export const startRemoveHabits = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/habits/${id}`)
      .remove()
      .then(() => {
        dispatch(removeHabit({ id }));
      });
  };
};

export const editHabit = (id, updates) => ({
  type: types.EDIT_HABIT,
  id,
  updates
});
export const makeHabit = id => ({
  type: types.MAKE_HABIT,
  id
});

export const startMakeHabit = (id, habitId = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/habits`)
      .child(`${habitId}/timesRepeat`)
      .orderByChild("id")
      .equalTo(id)
      .once("child_added", function(snapshot) {
        snapshot.ref.update({ ready: true });
      })
      .then(() => {
        dispatch(makeHabit(id));
      });
  };
};

export const setHabits = habits => ({
  type: types.SET_HABITS,
  habits
});

export const startSetHabits = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/habits`)
      .once("value")
      .then(snapshot => {
        const habits = [];

        snapshot.forEach(childSnapshot => {
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
    case types.ADD_HABIT:
      return [...state, action.habit];
    case types.REMOVE_HABIT:
      return state.filter(({ id }) => id !== action.id);
    case types.EDIT_HABIT:
      return state.map(habit => {
        if (habit.id === action.id) {
          return {
            ...habit,
            ...action.updates
          };
        } else {
          return habit;
        }
      });
    case types.MAKE_HABIT:
      return state.map(habit => {
        habit.timesRepeat.map(t => {
          if (t.id === action.id) {
            t.ready = true;
            return {
              ...t
            };
          } else {
            return {
              ...t
            };
          }
        });
        return {
          ...habit
        };
      });
    case types.SET_HABITS:
      return action.habits;
    default:
      return state;
  }
};

export default habitsReducers;
