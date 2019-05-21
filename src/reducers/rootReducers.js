import { combineReducers } from "redux";
import habitsReducers from "./habitsReducers";
import filtersReducers from "./filtersReducers";
import todosReducers from "./todosReducers";
import categoriesReducers from "./categoriesReducers";
import dashboardReducers from "./dasboardReducers";
import authReducer from "./auth";

export const visibleData = (data, { text }) => {
  return data.filter(dat => {
    const textMatch = dat.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};

export const sortByDate = todos => {
  todos.sort(function(a, b) {
    return new Date(a.id) - new Date(b.id);
  });
  return todos;
};

export const setCategories = (todos, category) => {
  todos.map(todo => {
    todo.todo.map(t => {
      let index = category.findIndex(x => x == t.category);
      if (index === -1) {
        category.push(t.category);
      }
    });
  });
  return category;
};

export const amountTodos = todos => {
  const today = new Date().toISOString().substring(0, 10);
  const todayTodos = todos.find(todo => todo.id === today);
  if (todayTodos == null) {
    return 0;
  } else {
    return todayTodos.todo.length;
  }
};

export const rootReducers = combineReducers({
  todos: todosReducers,
  habits: habitsReducers,
  filters: filtersReducers,
  auth: authReducer,
  categories: categoriesReducers,
  dashboard: dashboardReducers
});
