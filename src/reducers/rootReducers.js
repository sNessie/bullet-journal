import { combineReducers } from 'redux';
import habitsReducers from './habitsReducers';
import filtersReducers from './filtersReducers';
import authReducer from './auth';

export const visibleHabits = (habits, {text}) => {
  return habits.filter((habit) => {
    const textMatch = habit.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
};

export const rootReducers = combineReducers({
  habits: habitsReducers,
  filters: filtersReducers,
  auth: authReducer
});
