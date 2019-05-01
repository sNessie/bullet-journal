import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { visibleData } from "../../reducers/rootReducers";
import { cleanTextFilter } from "../../reducers/filtersReducers";
import { bindActionCreators } from "redux";

const ListTodo = ({ todos, actions }) => {
  useEffect(() => {
    actions.cleanTextFilter();
  }, []);
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
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
    todos: visibleData(state.todos, state.filters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      cleanTextFilter: bindActionCreators(cleanTextFilter, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodo);
