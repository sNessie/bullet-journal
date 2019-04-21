import React, { useState } from "react";
import uuid from "uuid";
import { connect } from "react-redux";
import { startAddHabit } from "../../reducers/habitsReducers";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import InputAdd from "../../layout/habit/InputAdd";
import FormAdd from "../../layout/habit/FormAdd";
import FormContent from "../../layout/habit/FormContent";
import ButtonAdd from "../../layout/habit/ButtonAdd";

const AddHabbit = ({ hideAddForm, actions }) => {
  const today = new Date().toISOString().split("T")[0];
  const [habit, setHabit] = useState({
    name: "",
    date: new Date().toISOString().substring(0, 10),
    times: "",
    timesRepeat: []
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setHabit(prevHabit => ({
      ...prevHabit,
      [name]: value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formIsValid()) return;
    actions.startAddHabit(habit);
    hideAddForm();
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
    <FormAdd>
      <FormContent>
        <form onSubmit={handleSubmit}>
          <div>{errors.title}</div>
          <div>{errors.date}</div>
          <div>{errors.times}</div>
          <InputAdd
            type="text"
            validate
            required
            name="name"
            value={habit.name}
            placeholder="Habit name"
            onChange={handleChange}
          />
          <InputAdd
            name="date"
            min={today}
            required
            type="date"
            value={habit.date}
            onChange={handleChange}
          />
          <InputAdd
            type="number"
            required
            name="times"
            placeholder="TimesRepeat"
            value={habit.times}
            onChange={generateTimesRepeat}
          />
          <ButtonAdd type="submit">Add</ButtonAdd>
        </form>
      </FormContent>
    </FormAdd>
  );
};

AddHabbit.propTypes = {
  hideAddForm: PropTypes.func.isRequired,
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
