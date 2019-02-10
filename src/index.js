import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import rootReducers from './reducers/rootReducers';
import {addHabit } from './reducers/habitsReducers';



const store = createStore(rootReducers);

store.subscribe(() => {
    console.log(store.getState());
  });

store.dispatch(addHabit({name: "walk a dog", date: '2019-02-01'}));
store.dispatch(addHabit({name: "jogging", date: '2019-02-09'}));

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
