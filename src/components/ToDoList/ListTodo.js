import React from "react";

const ListTodo = () => {
  const todos = [];
  const todosList = todos.map((todo, i) => {
    return (
      <div key={i}>
        <h1>{todo.name}</h1>
        <div />
        <div>
          <span>Ready:</span>
          <span>{todo.ready ? "yes" : "no"}</span>
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

export default ListTodo;
