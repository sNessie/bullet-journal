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
  return (
    <Layout>
      <FiltersForm />
      {showAddForm ? (
        <Button onClick={() => setShowAddForm(false)}>Hide add form</Button>
      ) : (
        <Button onClick={() => setShowAddForm(true)}>Show add form</Button>
      )}
      {showAddForm ? <AddHabit hideAddForm={hideAddForm} /> : null}
      <ListHabits />
    </Layout>
  );
};

export default HabitTracker;
