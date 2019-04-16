import React, { useState } from "react";
// import uuid from "uuid";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
// import { startAddHabit } from "../../reducers/habitsReducers";
import { Button, Row, Input } from "react-materialize";
import PropTypes from "prop-types";

const AddHabbit = () => {
  const [habit, setHabit] = useState({
    name: "",
    date: "",
    times: "",
    timesRepeat: []
  });
  // const [date, setDate] = useState("");
  // const [timesRepeat, setTimesRepeat] = useState([]);
  // const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setHabit(prevCourse => ({
      ...prevCourse,
      [name]: name === "times25" ? parseInt(value, 10) : value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(habit);
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
          // required
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
