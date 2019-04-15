import React, { Component } from "react";
import { connect } from "react-redux";
import { startMakeHabit } from "../../reducers/habitsReducers";
import { visibleHabits } from "../../reducers/rootReducers";
import { Row, Button, Col } from "react-materialize";
import PropTypes from "prop-types";
import "./style.css";

class ListTimesOfHabit extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = (id, key) => {
    this.props.dispatch(startMakeHabit(id, key));
  };
  render() {
    const timesList = this.props.times.map(time => {
      return (
        <Col s={2} key={time.id} className="habit">
          <span className="hidden">{time.date}</span>
          <Button
            floating
            small="true"
            className="red"
            waves="light"
            icon={time.ready ? "done" : "done_outline"}
            disabled={time.ready ? true : false}
            onClick={() => this.handleClick(time.id, this.props.habitId)}
          />
        </Col>
      );
    });
    return <Row>{timesList}</Row>;
  }
}

ListTimesOfHabit.propTypes = {};

const mapStateToProps = state => {
  return {
    habits: visibleHabits(state.habits, state.filters)
  };
};
export default connect(mapStateToProps)(ListTimesOfHabit);
