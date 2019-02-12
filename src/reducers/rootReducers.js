import habitsReducers from './habitsReducers';
import filtersReducers from './filtersReducers';
import { combineReducers } from 'redux';

export const visibleHabits = (habits, {text}) => {
  return habits.filter((habit) => {
    const textMatch = habit.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
};

 const rootReducer = combineReducers({
  habits: habitsReducers, 
  filters: filtersReducers
});



export default rootReducer;