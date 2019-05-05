import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import FiltersForm from "../DashboardPage/FiltersForm";
import Layout from "../../layout/Layout";
import { CenterContainer } from "../../layout/Container";
import Button from "../../layout/Button";

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
      <FiltersForm />
      <CenterContainer>
        <Button onClick={addFormShow}>Show add form</Button>
        {showAddForm ? <AddTodo hideAddForm={hideAddForm} /> : null}
      </CenterContainer>
      <ListTodo />
    </Layout>
  );
};

export default ToDoList;
