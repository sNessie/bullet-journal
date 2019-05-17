import React from "react";
import PropTypes from "prop-types";
import Button from "../../layout/Button";
import TodoLi from "../../layout/todo/TodoLi";
import ReactSVG from "react-svg";

const ListTodos = ({ t, todo, deleteSingleTodo, toggleTodo }) => {
  const todosList = todo.map((todo, i) => {
    return (
      <TodoLi key={i}>
        {todo.name}
        <Button
          onClick={() => {
            deleteSingleTodo(t, todo.id);
          }}
        >
          X
        </Button>
        <ReactSVG
          src={todo.ready ? "img/svg/checkmark.svg" : "img/svg/checkmark2.svg"}
          wrapper="span"
          svgStyle={{ width: 20, height: 20 }}
          onClick={() => {
            toggleTodo(t.id, todo.id, todo.ready);
          }}
        />
      </TodoLi>
    );
  });
  return <>{todosList.length === 0 ? <p>No todos</p> : todosList}</>;
};

ListTodos.propTypes = {
  todo: PropTypes.array.isRequired,
  t: PropTypes.string.isRequired,
  deleteSingleTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default ListTodos;
