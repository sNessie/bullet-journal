import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import { rootReducers } from './reducers/rootReducers';
import './config/fbConfig';
import thunk from 'redux-thunk';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
  );



const prov = (
  <Provider store={store} >
    <App />
  </Provider>
);


ReactDOM.render(prov, document.getElementById('root'));
serviceWorker.register();
