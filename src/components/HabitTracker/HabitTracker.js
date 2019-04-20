import React, { useState } from "react";
import AddHabit from "./AddHabit";
import ListHabits from "./ListHabits";
import FiltersForm from "./FiltersForm";

const HabitTracker = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  function hideAddForm() {
    setShowAddForm(false);
  }
  return (
    <div>
      <FiltersForm />
      <div>
        {showAddForm ? (
          <button onClick={() => setShowAddForm(false)}>Hide add form</button>
        ) : (
          <button onClick={() => setShowAddForm(true)}>Show add form</button>
        )}
      </div>
      {showAddForm ? <AddHabit hideAddForm={hideAddForm} /> : null}
      <ListHabits />
    </div>
  );
};

export default HabitTracker;
