import habitsReducers from './habitsReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  habits: habitsReducers
});

export default rootReducer;