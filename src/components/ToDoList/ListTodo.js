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

  function deleteTodo(todo) {
    actions.startRemoveTodo({ id: todo.id });
    toast.info("Todo deleted");
  }

  function toggleTodo(id, ready) {
    actions.startToggleTodo(id, ready);
    ready
      ? toast.info("Still not ready?")
      : toast.success("Great! You just did your todo");
  }
  const todosList = todos.map((todo, i) => {
    return (
      <Card data={todo.priority} key={i}>
        <H1>
          {todo.name}{" "}
          <Button
            onClick={() => {
              deleteTodo(todo);
            }}
          >
            X
          </Button>
        </H1>
        <div>
          <span>Ready:</span>
          <ReactSVG
            src={
              todo.ready ? "img/svg/checkmark.svg" : "img/svg/checkmark2.svg"
            }
            wrapper="span"
            svgStyle={{ width: 20, height: 20 }}
            onClick={() => {
              toggleTodo(todo.id, todo.ready);
            }}
          />
        </div>
        <div>
          <span>Category:</span>
          <span>{todo.category}</span>
        </div>
      </Card>
    );
  });
  return (
    <ContainerCard>
      {todos.length === 0 ? <p>No todos</p> : todosList}
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
    todos: visibleData(state.todos, state.filters)
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
