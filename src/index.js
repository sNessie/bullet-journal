import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import rootReducers from './reducers/rootReducers';
import {addHabit, removeHabit, editHabit } from './reducers/habitsReducers';
import {setTextFilter} from './reducers/filtersReducers';



const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
  });

const habitOne = store.dispatch(addHabit({name: "walk a dog", date: '2019-02-01'}));
const habitTwo = store.dispatch(addHabit({name: "jogging", date: '2019-02-09'}));

store.dispatch(removeHabit({id: habitOne.habit.id}));
store.dispatch(editHabit(habitTwo.habit.id, {name: 'go to a gym'}));

store.dispatch(setTextFilter('walk'));




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
