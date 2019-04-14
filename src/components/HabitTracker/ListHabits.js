import React from "react";
import ListTimesOfHabit from "./ListTimesOfHabit";
import { connect } from "react-redux";
import { visibleHabits } from "../../reducers/rootReducers";
import { startRemoveHabits } from "../../reducers/habitsReducers";
import { Row, Card, CardTitle, Col } from "react-materialize";

const ListHabits = ({ habits, dispatch }) => {
  const habitsList = habits.map(habit => {
    return (
      <Col s={4} key={habit.id}>
        <Card
          className="s3"
          header={<CardTitle image="img/sample-1.jpg">{habit.name}</CardTitle>}
          actions={[
            <button
              onClick={() => {
                dispatch(startRemoveHabits({ id: habit.id }));
              }}
            >
              Remove
            </button>
          ]}
        >
          <div>
            <span className="blue-text">Date of starting: </span>
            {habit.date}
          </div>
          <div>
            <span className="blue-text">Times to repeat: </span>
            {habit.times}
          </div>
          <div>
            <span className="blue-text">Ready:</span>
            <ListTimesOfHabit habitId={habit.id} times={habit.timesRepeat} />
          </div>
        </Card>
      </Col>
    );
  });
  return <Row>{habitsList}</Row>;
};
const mapStateToProps = state => {
  return {
    habits: visibleHabits(state.habits, state.filters)
  };
};

export default connect(mapStateToProps)(ListHabits);
