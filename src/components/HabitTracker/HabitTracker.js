import React, { useState } from "react";
import AddHabit from "./AddHabit";
import ListHabits from "./ListHabits";
import FiltersForm from "./FiltersForm";
import { Button, Row, Col } from "react-materialize";

const HabitTracker = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  return (
    <Row className="container">
      <Row>
        <FiltersForm />
        <Col className="right">
          {showAddForm ? (
            <Button waves="light" onClick={() => setShowAddForm(false)}>
              Hide add form
            </Button>
          ) : (
            <Button waves="light" onClick={() => setShowAddForm(true)}>
              Show add form
            </Button>
          )}
        </Col>
      </Row>
      {showAddForm ? <AddHabit showForm={showAddForm} /> : null}
      <ListHabits />
    </Row>
  );
};

export default HabitTracker;
