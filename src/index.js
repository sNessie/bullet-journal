import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import {visibleHabits, rootReducers} from './reducers/rootReducers';
import { addHabit } from './reducers/habitsReducers';





const store = createStore(rootReducers);

store.subscribe(() => {
  const state = store.getState();
  const getVisibleHabits = visibleHabits(state.habits, state.filters);

  console.log(getVisibleHabits);
  });

const habitOne = store.dispatch(addHabit({name: "walk a dog", date: '2019-02-01'}));
const habitTwo = store.dispatch(addHabit({name: "jogging with dog", date: '2019-02-09'}));



const prov = (
  <Provider store={store} >
    <App />
  </Provider>
);


ReactDOM.render(prov, document.getElementById('root'));
serviceWorker.register();
