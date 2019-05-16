import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { visibleData } from "../../reducers/rootReducers";
import { cleanTextFilter } from "../../reducers/filtersReducers";
import { startRemoveTodo, startToggleTodo } from "../../reducers/todosReducers";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import Card from "../../layout/card/Card";
import ContainerH1 from "../../layout/card/ContainerH1";
import H1 from "../../layout/card/H1";
import Button from "../../layout/Button";
import TodoUl from "../../layout/todo/TodoUl";
import TodoLi from "../../layout/todo/TodoLi";
import ContainerCard from "../../layout/card/ContainerCard";
import ReactSVG from "react-svg";

const ListTodo = ({ todos, actions }) => {
  useEffect(() => {
    actions.cleanTextFilter();
  }, []);

  function toggleTodo(todoId, id, ready) {
    actions.startToggleTodo(todoId, id, ready);
    ready
      ? toast.info("Still not ready?")
      : toast.success("Great! You just did your todo");
  }

  const todosList = todos.map(t => {
    return (
      <Card key={t.id}>
        <ContainerH1>
          <H1>{t.id}</H1>
          <Button>X</Button>
        </ContainerH1>
        <TodoUl>
          {t.todo.map((todo, i) => {
            return (
              <TodoLi key={i}>
                {todo.name}
                <ReactSVG
                  src={
                    todo.ready
                      ? "img/svg/checkmark.svg"
                      : "img/svg/checkmark2.svg"
                  }
                  wrapper="span"
                  svgStyle={{ width: 20, height: 20 }}
                  onClick={() => {
                    toggleTodo(t.id, todo.id, todo.ready);
                  }}
                />
              </TodoLi>
            );
          })}
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
