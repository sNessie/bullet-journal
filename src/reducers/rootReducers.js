import { combineReducers } from "redux";
import habitsReducers from "./habitsReducers";
import filtersReducers from "./filtersReducers";
import todosReducers from "./todosReducers";
import categoriesReducers from "./categoriesReducers";
import authReducer from "./auth";

export const visibleData = (data, { text }) => {
  return data.filter(dat => {
    const textMatch = dat.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
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

export const rootReducers = combineReducers({
  todos: todosReducers,
  habits: habitsReducers,
  filters: filtersReducers,
  auth: authReducer,
  categories: categoriesReducers
});
