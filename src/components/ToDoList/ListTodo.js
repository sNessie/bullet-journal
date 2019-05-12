import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { visibleData } from "../../reducers/rootReducers";
import { cleanTextFilter } from "../../reducers/filtersReducers";
import { startRemoveTodo, startToggleTodo } from "../../reducers/todosReducers";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Card from "../../layout/card/Card";
import H1 from "../../layout/card/H1";
import Button from "../../layout/Button";
import ContainerCard from "../../layout/card/ContainerCard";
import ReactSVG from "react-svg";

const ListTodo = ({ todos, actions }) => {
  useEffect(() => {
    actions.cleanTextFilter();
  }, []);

  const todo = [];
  console.log(todos);
  const todosList = todos.map(todo => todo);
  return (
    <ContainerCard>
      {todo.length === 0 ? <p>No todos</p> : todosList}
    </ContainerCard>
  );
};

ListTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    filters: state.filters,
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      cleanTextFilter: bindActionCreators(cleanTextFilter, dispatch),
      startRemoveTodo: bindActionCreators(startRemoveTodo, dispatch),
      startToggleTodo: bindActionCreators(startToggleTodo, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodo);
