import React, { useState } from "react";
import uuid from "uuid";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { startAddHabit } from "../../reducers/habitsReducers";
import { Button, Row, Input } from "react-materialize";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

const AddHabbit = ({ showForm, actions }) => {
  const [habit, setHabit] = useState({
    name: "",
    date: "",
    times: "",
    timesRepeat: []
  });
  const [errors, setErrors] = useState({});
  const [isDate, setIsDate] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "date") {
      setIsDate(false);
    }
    setHabit(prevHabit => ({
      ...prevHabit,
      [name]: value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    actions.startAddHabit(habit);
    showForm();
  }

  function formIsValid() {
    const { name, date, times } = habit;
    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!date) errors.date = "Date is required";
    if (!times) errors.times = "Times is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function generateTimesRepeat(e) {
    const { name, value } = e.target;
    let times = parseInt(value, 10);
    let startDate = new Date(habit.date);
    let timesRepeat = [];
    let id;
    for (let i = 0; i < times; i++) {
      id = uuid();
      startDate.setDate(startDate.getDate() + 1);
      timesRepeat.push({
        id: id,
        date: startDate.toISOString().substring(0, 10),
        ready: false
      });
    }
    setHabit(prevHabit => ({
      ...prevHabit,
      [name]: value,
      timesRepeat
    }));
  }
  return (
    <Row>
      <form onSubmit={handleSubmit}>
        <div>{errors.title}</div>
        <div>{errors.date}</div>
        <div>{errors.times}</div>
        <Input
          s={4}
          label="Name"
          type="text"
          validate
          // required
          name="name"
          value={habit.name}
          autoFocus
          onChange={handleChange}
        />
        <Input
          s={3}
          label="Date of start"
          name="date"
          // required
          type="date"
          onChange={handleChange}
        />
        <Input
          s={3}
          label="Times to repeat"
          type="number"
          validate
          // required
          name="times"
          value={habit.times}
          onChange={generateTimesRepeat}
          disabled={isDate}
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
    </Row>
  );
};

AddHabbit.propTypes = {
  showForm: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      startAddHabit: bindActionCreators(startAddHabit, dispatch)
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddHabbit);
