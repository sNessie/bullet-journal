import React from "react";
import { connect } from "react-redux";
import { startMakeHabit } from "../../reducers/habitsReducers";
import { visibleData } from "../../reducers/rootReducers";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { ButtonTime, TimeHidden } from "../../layout/addForm/ButtonTime";
import { toast } from "react-toastify";
import ReactSVG from "react-svg";

const ListTimesOfHabit = ({ habitId, times, actions }) => {
  const handleClick = (id, key) => {
    actions.startMakeHabit(id, key);
    toast.success("Great! You just did your habit");
  };
  const timesList = times.map(time => {
    return (
      <ButtonTime
        key={time.id}
        disabled={time.ready ? true : false}
        onClick={() => handleClick(time.id, habitId)}
      >
        <TimeHidden className="hidden">{time.date}</TimeHidden>
        <ReactSVG
          src={time.ready ? "img/svg/checkmark.svg" : "img/svg/checkmark2.svg"}
          wrapper="span"
          svgStyle={{ width: 20, height: 20 }}
        />
      </ButtonTime>
    );
  });
  return <div>{times.length === 0 ? <p>No habits</p> : timesList}</div>;
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
    habits: visibleData(state.habits, state.filters)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTimesOfHabit);
