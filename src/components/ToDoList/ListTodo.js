import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ListTodo = ({ todos }) => {
  const todosList = todos.map((todo, i) => {
    return (
      <div key={i}>
        <h1>
          {todo.name} <button>X</button>
        </h1>
        <div />
        <div>
          <span>Ready:</span>
          <span>{todo.ready ? "yes" : "no"}</span>
          <button>make ready</button>
        </div>
        <div>
          <span>Category:</span>
          <span>{todo.category}</span>
        </div>
        <div>
          <span>Priority:</span>
          <span>{todo.priority}</span>
        </div>
      </div>
    );
  });
  return <div>{todos.length === 0 ? <p>No todos</p> : todosList}</div>;
};

ListTodo.propTypes = {
  todos: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(ListTodo);
