import React from "react";
import PropTypes from "prop-types";
import TodoLi from "../../layout/todo/TodoLi";
import ReactSVG from "react-svg";

const ListTodos = ({ t, todos, deleteSingleTodo, toggleTodo }) => {
  const todosList = todos.map(todo => {
    return (
      <TodoLi priority={todo.priority} key={todo.id}>
        {todo.name}
        <div>
          {todos.length === 1 ? (
            ""
          ) : (
            <ReactSVG
              src="img/svg/close.svg"
              wrapper="span"
              svgStyle={{
                width: 20,
                height: 20,
                cursor: "pointer"
              }}
              onClick={() => {
                deleteSingleTodo(t, todo.id);
              }}
            />
          )}

          <ReactSVG
            src={
              todo.ready ? "img/svg/checkmark.svg" : "img/svg/checkmark2.svg"
            }
            wrapper="span"
            svgStyle={{ width: 20, height: 20, cursor: "pointer" }}
            onClick={() => {
              toggleTodo(t, todo.id, todo.ready);
            }}
          />
        </div>
      </TodoLi>
    );
  });
  return <>{todosList.length === 0 ? <p>No todos</p> : todosList}</>;
};

ListTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  t: PropTypes.string.isRequired,
  deleteSingleTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default ListTodos;
