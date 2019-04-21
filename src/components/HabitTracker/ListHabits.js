import React from "react";
import ListTimesOfHabit from "./ListTimesOfHabit";
import { connect } from "react-redux";
import { visibleHabits } from "../../reducers/rootReducers";
import { startRemoveHabits } from "../../reducers/habitsReducers";
import PropTypes from "prop-types";
import Card from "../../layout/card/Card";
import ContainerCard from "../../layout/card/ContainerCard";
import H1 from "../../layout/card/H1";
import Button from "../../layout/Button";

const ListHabits = ({ habits, dispatch }) => {
  const habitsList = habits.map(habit => {
    return (
      <Card key={habit.id}>
        <H1>
          {habit.name}
          <Button
            key={habit.id}
            onClick={() => {
              dispatch(startRemoveHabits({ id: habit.id }));
            }}
          >
            X
          </Button>
        </H1>
        <div>
          Date of starting:
          {habit.date}
        </div>
        <div>
          <span>Times to repeat: </span>
          {habit.times}
        </div>
        <div>
          <span>Ready:</span>
          <ListTimesOfHabit habitId={habit.id} times={habit.timesRepeat} />
        </div>
      </Card>
    );
  });
  return <ContainerCard>{habitsList}</ContainerCard>;
};

ListHabits.propTypes = {
  habits: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    habits: visibleHabits(state.habits, state.filters)
  };
};

export default connect(mapStateToProps)(ListHabits);
