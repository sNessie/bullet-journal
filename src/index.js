import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routers/App';
import * as serviceWorker from './serviceWorker';

import { createStore} from 'redux';
import rootReducers from './reducers/rootReducers';



const store = createStore(rootReducers);

console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
