import database from "../config/fbConfig";

const todosDefaultState = [];

export const addTodo = todo => ({
  type: "ADD_TODO",
  todo
});

export const startAddTodo = (todoData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = "",
      date = "",
      category = "",
      priority = "",
      ready = ""
    } = todoData;
    const todo = { name, date, category, priority, ready };
    database
      .ref(`users/${uid}/todos`)
      .push(todo)
      .then(ref => {
        dispatch(
          addTodo({
            id: ref.key,
            ...todo
          })
        );
      });
  };
};

export const removeTodo = ({ id } = {}) => ({
  type: "REMOVE_TODO",
  id
});

export const editTodo = (id, updates) => ({
  type: "EDIT_TODO",
  id,
  updates
});

export const setTodos = todos => ({
  type: "SET_TODO",
  todos
});

export const startSetTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/todos`)
      .once("value")
      .then(snapshot => {
        const todos = [];

        snapshot.forEach(childSnapshot => {
          todos.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setTodos(todos));
      });
  };
};

const todosReducers = (state = todosDefaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case "SET_TODO":
      return action.todos;
    default:
      return state;
  }
};

export default todosReducers;
