/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/App";
import configureStore from "./config/configureStore";
import { startSetHabits } from "./reducers/habitsReducers";
import { startSetTodos } from "./reducers/todosReducers";
import { login, logout } from "./reducers/auth";
import { firebase } from "./config/fbConfig";

const store = configureStore();

const prov = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(prov, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetHabits());
    store.dispatch(startSetTodos()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
