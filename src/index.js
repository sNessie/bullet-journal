import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducers } from './reducers/rootReducers';
import './config/fbConfig';






const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );



const prov = (
  <Provider store={store} >
    <App />
  </Provider>
);


ReactDOM.render(prov, document.getElementById('root'));
serviceWorker.register();
