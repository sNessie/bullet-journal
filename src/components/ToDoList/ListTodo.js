import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  startRemoveTodo,
  startToggleTodo,
  startRemoveSingleTodo
} from "../../reducers/todosReducers";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Card from "../../layout/card/Card";
import ContainerH1 from "../../layout/card/ContainerH1";
import H1 from "../../layout/card/H1";
import Button from "../../layout/Button";
import TodoUl from "../../layout/todo/TodoUl";
import ContainerCard from "../../layout/card/ContainerCard";
import ListTodos from "./ListTodos";

const ListTodo = ({ todos, actions }) => {
  function toggleTodo(todoId, id, ready) {
    actions.startToggleTodo(todoId, id, ready);
    ready
      ? toast.info("Still not ready?")
      : toast.success("Great! You just did your todo");
  }

  function deleteTodo(id) {
    actions.startRemoveTodo(id);
  }

  function deleteSingleTodo(todoId, id) {
    actions.startRemoveSingleTodo(todoId, id);
  }

  const todosList = todos.map(t => {
    return (
      <Card key={t.id}>
        <ContainerH1>
          <H1>{t.id}</H1>
          <Button
            onClick={() => {
              deleteTodo(t.id);
            }}
          >
            X
          </Button>
        </ContainerH1>
        <TodoUl>
          <ListTodos
            t={t.id}
            todos={t.todo}
            deleteSingleTodo={deleteSingleTodo}
            toggleTodo={toggleTodo}
          />
        </TodoUl>
      </Card>
    );
  });
  return (
    <ContainerCard>
      {todosList.length === 0 ? <p>No todos</p> : todosList}
    </ContainerCard>
  );
};

ListTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      startRemoveTodo: bindActionCreators(startRemoveTodo, dispatch),
      startRemoveSingleTodo: bindActionCreators(
        startRemoveSingleTodo,
        dispatch
      ),
      startToggleTodo: bindActionCreators(startToggleTodo, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTodo);
