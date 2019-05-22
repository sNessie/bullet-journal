import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import Layout from "../../layout/Layout";
import { CenterContainer } from "../../layout/Container";
import Button from "../../layout/Button";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { amountTodos } from "../../reducers/rootReducers";

const ToDoList = ({ dashboard }) => {
  const [showAddForm, setShowAddForm] = useState(false);

  function hideAddForm() {
    setShowAddForm(false);
  }
  function addFormShow() {
    setShowAddForm(true);
  }

  return (
    <Layout>
      <Helmet>
        <title>
          ({dashboard.todoAmount.toString()}) ToDo List - Bullet Journal
        </title>
      </Helmet>
      <CenterContainer>
        <Button onClick={addFormShow}>Show add form</Button>
        {showAddForm ? <AddTodo hideAddForm={hideAddForm} /> : null}
      </CenterContainer>
      <ListTodo />
    </Layout>
  );
};
ToDoList.propTypes = {
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    dashboard: amountTodos(state.todos)
  };
};

export default connect(mapStateToProps)(ToDoList);
