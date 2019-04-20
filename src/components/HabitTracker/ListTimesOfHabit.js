import React from "react";
import { connect } from "react-redux";
import { startMakeHabit } from "../../reducers/habitsReducers";
import { visibleHabits } from "../../reducers/rootReducers";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import "./style.css";

const ListTimesOfHabit = ({ habitId, times, actions }) => {
  const handleClick = (id, key) => {
    actions.startMakeHabit(id, key);
  };
  const timesList = times.map(time => {
    return (
      <div key={time.id} className="habit">
        <span className="hidden">{time.date}</span>
        <button
          disabled={time.ready ? true : false}
          onClick={() => handleClick(time.id, habitId)}
        >
          {time.ready ? "true" : "false"}
        </button>
      </div>
    );
  });
  return <div>{timesList}</div>;
};

ListTimesOfHabit.propTypes = {
  times: PropTypes.array.isRequired,
  habitId: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      startMakeHabit: bindActionCreators(startMakeHabit, dispatch)
    }
  };
};
const mapStateToProps = state => {
  return {
    habits: visibleHabits(state.habits, state.filters)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTimesOfHabit);
