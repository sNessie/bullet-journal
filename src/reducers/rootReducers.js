import { combineReducers } from "redux";
import habitsReducers from "./habitsReducers";
import filtersReducers from "./filtersReducers";
import todosReducers from "./todosReducers";
import categoriesReducers from "./categoriesReducers";
import authReducer from "./auth";

export const visibleHabits = (habits, { text }) => {
  return habits.filter(habit => {
    const textMatch = habit.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  });
};

export const setCategories = (todos, category) => {
  todos.map(todo => {
    let index = category.findIndex(x => x == todo.category);
    if (index === -1) {
      category.push(todo.category);
    }
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
