import React, { Component } from "react";
import uuid from "uuid";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { connect } from "react-redux";
import { startAddHabit } from "../../reducers/habitsReducers";
import { Button, Row, Input } from "react-materialize";
import PropTypes from "prop-types";

class AddHabbit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: moment(),
      times: "",
      timesRepeat: [],
      focused: false,
      errorName: "",
      errorTimes: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTimesChange = e => {
    const times = e.target.value;
    if (!times || times.match(/^([1-9]|[12]\d|9[0-9])$/)) {
      this.setState(() => ({ times }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState(() => ({ errorName: "Name cannot be black" }));
    } else if (!this.state.times) {
      this.setState(() => ({
        errorTimes: "Times cannot be black",
        errorName: ""
      }));
    } else {
      const newHabit = {
        name: this.state.name,
        date: this.state.date,
        times: this.state.times,
        timesRepeat: this.generateTimesRepeat(this.state.date, this.state.times)
      };
      this.props.dispatch(startAddHabit(newHabit));
      this.props.showForm();
    }
    this.setState({
      name: "",
      date: "",
      times: 0,
      timesRepeat: [],
      errorName: "",
      errorTimes: ""
    });
  };

  onDateChange = (date, value) => {
    this.setState(() => ({ date: value }));
  };

  generateTimesRepeat = (date, times) => {
    let startDate = new Date(date);
    times = parseInt(times, 10);
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
    return timesRepeat;
  };

  render() {
    const { name, times } = this.state;
    return (
      <Row>
        <form onSubmit={this.handleSubmit}>
          <Input
            s={4}
            label="Name"
            type="text"
            validate
            required
            name="name"
            value={name}
            autoFocus
            onChange={this.handleChange}
          />
          <Input
            s={3}
            label="Date of start"
            name="on"
            type="date"
            onChange={this.onDateChange}
          />
          <Input
            s={3}
            label="Times to repeat"
            type="number"
            validate
            required
            name="Times to repeat"
            value={times}
            onChange={this.onTimesChange}
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
        <div>
          {this.state.errorName} {this.state.errorTimes}
        </div>
      </Row>
    );
  }
}

AddHabbit.propTypes = {
  showForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddHabbit);
