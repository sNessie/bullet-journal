import React, { useEffect } from "react";
import ListTimesOfHabit from "./ListTimesOfHabit";
import { connect } from "react-redux";
import { visibleData } from "../../reducers/rootReducers";
import { startRemoveHabits } from "../../reducers/habitsReducers";
import PropTypes from "prop-types";
import Card from "../../layout/card/Card";
import ContainerCard from "../../layout/card/ContainerCard";
import H1 from "../../layout/card/H1";
import Button from "../../layout/Button";
import { toast } from "react-toastify";
import { cleanTextFilter } from "../../reducers/filtersReducers";
import { bindActionCreators } from "redux";

const ListHabits = ({ habits, actions }) => {
  useEffect(() => {
    actions.cleanTextFilter();
  }, []);

  function deleteHabit(habit) {
    actions.startRemoveHabits({ id: habit.id });
    toast.info("Habit deleted");
  }
  const habitsList = habits.map(habit => {
    return (
      <Card key={habit.id}>
        <H1>
          {habit.name}
          <Button
            key={habit.id}
            onClick={() => {
              deleteHabit(habit);
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
  return (
    <ContainerCard>
      {habits.length === 0 ? <p>No habits</p> : habitsList}
    </ContainerCard>
  );
};

ListHabits.propTypes = {
  habits: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    habits: visibleData(state.habits, state.filters)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      cleanTextFilter: bindActionCreators(cleanTextFilter, dispatch),
      startRemoveHabits: bindActionCreators(startRemoveHabits, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHabits);
