import React, { useState } from "react";
import AddHabit from "./AddHabit";
import ListHabits from "./ListHabits";
import FiltersForm from "../DashboardPage/FiltersForm";
import Layout from "../../layout/Layout";
import Button from "../../layout/Button";
import { CenterContainer } from "../../layout/Container";
import { Helmet } from "react-helmet";

const HabitTracker = () => {
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
        <title>Habit Tracker - Bullet Journal</title>
      </Helmet>
      <FiltersForm />
      <CenterContainer>
        <Button onClick={addFormShow}>Show add form</Button>
        {showAddForm ? <AddHabit hideAddForm={hideAddForm} /> : null}
      </CenterContainer>
      <ListHabits />
    </Layout>
  );
};

export default HabitTracker;
