import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import rootReducers from './reducers/rootReducers';
import {addHabit, removeHabit } from './reducers/habitsReducers';



const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
  });

const habitOne = store.dispatch(addHabit({name: "walk a dog", date: '2019-02-01'}));
const habitTwo = store.dispatch(addHabit({name: "jogging", date: '2019-02-09'}));

console.log(habitOne);

store.dispatch(removeHabit({id: habitOne.habit.id}));
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
