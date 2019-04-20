import React from "react";
import ListTimesOfHabit from "./ListTimesOfHabit";
import { connect } from "react-redux";
import { visibleHabits } from "../../reducers/rootReducers";
import { startRemoveHabits } from "../../reducers/habitsReducers";
import PropTypes from "prop-types";

const ListHabits = ({ habits, dispatch }) => {
  const habitsList = habits.map(habit => {
    return (
      <div key={habit.id}>
        <div>
          <button
            key={habit.id}
            onClick={() => {
              dispatch(startRemoveHabits({ id: habit.id }));
            }}
          >
            Remove
          </button>
          <span>Date of starting: </span>
          {habit.date}
          <div>
            <span>Times to repeat: </span>
            {habit.times}
          </div>
          <div>
            <span>Ready:</span>
            <ListTimesOfHabit habitId={habit.id} times={habit.timesRepeat} />
          </div>
        </div>
      </div>
    );
  });
  return <div>{habitsList}</div>;
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
