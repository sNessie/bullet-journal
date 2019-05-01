import React from "react";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import FiltersForm from "../DashboardPage/FiltersForm";
import Layout from "../../layout/Layout";

const ToDoList = () => (
  <Layout>
    ToDoList Page
    <FiltersForm />
    <AddTodo />
    <ListTodo />
  </Layout>
);

export default ToDoList;
