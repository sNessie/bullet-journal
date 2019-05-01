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

export const startRemoveTodo = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/todos/${id}`)
      .remove()
      .then(() => {
        dispatch(removeTodo({ id }));
      });
  };
};

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

export const toogleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const startToggleTodo = (id, ready) => {
  return (dispatch, getState) => {
    let updateData = {};
    updateData["ready"] = !ready;
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/todos/${id}`)
      .orderByChild("ready")
      .equalTo(ready)
      .once("value", function(snapshot) {
        snapshot.ref.update(updateData);
      })
      .then(() => {
        dispatch(toogleTodo(id));
      });
  };
};

const todosReducers = (state = todosDefaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.todo];
    case "REMOVE_TODO":
      return state.filter(({ id }) => id !== action.id);
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          todo.ready = !todo.ready;
          return {
            ...todo
          };
        } else {
          return {
            ...todo
          };
        }
      });
    case "SET_TODO":
      return action.todos;
    default:
      return state;
  }
};

export default todosReducers;
