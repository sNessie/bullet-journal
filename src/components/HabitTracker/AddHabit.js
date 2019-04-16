import React, { useState } from "react";
import uuid from "uuid";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { startAddHabit } from "../../reducers/habitsReducers";
import { Button, Row, Input } from "react-materialize";
import PropTypes from "prop-types";

const AddHabbit = props => {
  const [habit, setHabit] = useState({});
  // const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setHabit(prevHabit => ({
      ...prevHabit,
      [name]: value,
      timesRepeat: generateTimesRepeat(habit.date, habit.times)
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    // to do > error handle
    props.dispatch(startAddHabit(habit));
    props.showForm();
  }

  function generateTimesRepeat(date, times) {
    times = parseInt(times, 10);
    let startDate = new Date(date);
    let timesRepeat = [];
    let id;
    // to fix: problem with times 1
    for (let i = 0; i <= times; i++) {
      id = uuid();
      startDate.setDate(startDate.getDate() + 1);
      timesRepeat.push({
        id: id,
        date: startDate.toISOString().substring(0, 10),
        ready: false
      });
    }
    return timesRepeat;
  }
  return (
    <Row>
      <form onSubmit={handleSubmit}>
        <Input
          s={4}
          label="Name"
          type="text"
          validate
          required
          name="name"
          value={habit.name}
          autoFocus
          onChange={handleChange}
        />
        <Input
          s={3}
          label="Date of start"
          name="date"
          type="date"
          onChange={handleChange}
        />
        <Input
          s={3}
          label="Times to repeat"
          type="number"
          validate
          required
          name="times"
          value={habit.times}
          onChange={handleChange}
        />
        <Button
          floating
          large
          className="red right"
          waves="light"
          icon="add"
          type="submit"
        />
      </form>
      {/* <div>{errors}</div> */}
    </Row>
  );
};

AddHabbit.propTypes = {
  showForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddHabbit);
