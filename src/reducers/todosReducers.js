import database from "../config/fbConfig";
import * as types from "./actionType";

const todosDefaultState = [];

export const addTodo = todo => ({
  type: types.ADD_TODO,
  todo
});

export const addNewTodo = todo => ({
  type: types.ADD_NEW_TODO,
  todo
});

export const startAddTodo = (todoData = {}, todoNew) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/todos/${todoData.id}`)
      .update(todoData)
      .then(() => {
        todoNew ? dispatch(addNewTodo(todoData)) : dispatch(addTodo(todoData));
      });
  };
};

export const removeTodo = ({ id } = {}) => ({
  type: types.REMOVE_TODO,
  id
});

export const removeSingleTodo = (todoId = "", id = "") => ({
  type: types.REMOVE_SINGLE_TODO,
  todoId,
  id
});

export const startRemoveSingleTodo = (todoId = "", id = "") => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/todos/${todoId}/todo`)
      .orderByChild("id")
      .equalTo(id)
      .once("child_added", function(snapshot) {
        snapshot.ref.remove();
      })
      .then(() => {
        dispatch(removeSingleTodo(todoId, id));
      });
  };
};
export const startRemoveTodo = (id = "") => {
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
  type: types.EDIT_TODO,
  id,
  updates
});

export const setTodos = todos => ({
  type: types.SET_TODO,
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

export const toogleTodo = (todoId, id) => ({
  type: types.TOGGLE_TODO,
  todoId,
  id
});

export const startToggleTodo = (todoId, id, ready) => {
  return (dispatch, getState) => {
    let updateData = {};
    updateData["ready"] = !ready;
    const uid = getState().auth.uid;
    database
      .ref(`users/${uid}/todos/${todoId}/todo`)
      .orderByChild("id")
      .equalTo(id)
      .once("child_added", function(snapshot) {
        snapshot.ref.update(updateData);
      })
      .then(() => {
        dispatch(toogleTodo(todoId, id));
      });
  };
};

const todosReducers = (state = todosDefaultState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
      return [...state, action.todo];
    case types.ADD_TODO:
      return state.map(todo =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case types.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case types.REMOVE_SINGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.todoId) {
          return {
            id: todo.id,
            todo: todo.todo.filter(t => t.id !== action.id)
          };
        } else {
          return { ...todo };
        }
      });
    case types.TOGGLE_TODO:
      return state.map(tod => {
        if (tod.id === action.todoId) {
          tod.todo.map(t => {
            if (t.id === action.id) {
              t.ready = !t.ready;
              return {
                ...t
              };
            } else {
              return {
                ...t
              };
            }
          });
        }
        return {
          ...tod
        };
      });
    case types.SET_TODO:
      return action.todos;
    default:
      return state;
  }
};

export default todosReducers;
