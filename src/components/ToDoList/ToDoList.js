import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import Layout from "../../layout/Layout";
import { CenterContainer } from "../../layout/Container";
import Button from "../../layout/Button";
import { Helmet } from "react-helmet";

const ToDoList = () => {
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
        <title>ToDo List - Bullet Journal</title>
      </Helmet>
      <CenterContainer>
        <Button onClick={addFormShow}>Show add form</Button>
        {showAddForm ? <AddTodo hideAddForm={hideAddForm} /> : null}
      </CenterContainer>
      <ListTodo />
    </Layout>
  );
};

export default ToDoList;
