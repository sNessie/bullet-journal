import React, { useState } from "react";
import AddHabit from "./AddHabit";
import ListHabits from "./ListHabits";
import FiltersForm from "./FiltersForm";
import Layout from "../../layout/Layout";
import Button from "../../layout/Button";

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
      <FiltersForm />
      {showAddForm ? (
        <Button onClick={hideAddForm}>Hide add form</Button>
      ) : (
        <Button onClick={addFormShow}>Show add form</Button>
      )}
      {showAddForm ? <AddHabit hideAddForm={hideAddForm} /> : null}
      <ListHabits />
    </Layout>
  );
};

export default HabitTracker;
