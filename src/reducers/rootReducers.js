import habitsReducers from './habitsReducers';
import filtersReducers from './filtersReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  habits: habitsReducers, 
  filters: filtersReducers
});

export default rootReducer;