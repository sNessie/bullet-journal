import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { rootReducers } from './reducers/rootReducers';
import { addHabit } from './reducers/habitsReducers';
// import { setTextFilter } from './reducers/filtersReducers';





const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch(addHabit({
  name: 'walk a dog',
  date: '2019-02-01',
  times: 1,
  timesRepeat: [{
    "id": 101,
    "date":"2018-09-05",
    "ready": false
        }]
}));

store.dispatch(addHabit({name: "jogging with dog", date: '2019-02-09'}));

// store.dispatch(setTextFilter('dog'));


const prov = (
  <Provider store={store} >
    <App />
  </Provider>
);


ReactDOM.render(prov, document.getElementById('root'));
serviceWorker.register();
