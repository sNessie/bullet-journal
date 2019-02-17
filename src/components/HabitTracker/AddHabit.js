import React, {Component} from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { addHabit } from '../../reducers/habitsReducers';




class AddHabbit extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      date: moment(),
      times: '' ,
      timesRepeat: [],
      focused: false,
      errorName: '',
      errorTimes: ''
    };
}

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  onTimesChange = (e) => {
    const times = e.target.value;
    if(!times || times.match(/^([1-9]|[12]\d|9[0-9])$/)){
    this.setState(() => ({times}));
  }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name ){
      this.setState(() => ({errorName: "Name cannot be black" }));
    } else if(!this.state.times){
      this.setState(() => ({errorTimes: "Times cannot be black", errorName: '' }));
    } else {
      const newHabit={
        name: this.state.name, 
        date: this.state.date.format('YYYY-MM-DD'),
        times: this.state.times,
        timesRepeat: this.generateTimesRepeat(this.state.date, this.state.times)
      };
      this.props.dispatch(addHabit(newHabit));
      this.props.showForm();
    }
      this.setState({
        name: '',
        date: moment(),
        times: 0,
        timesRepeat: [],
        errorName: '',
        errorTimes: ''
      });
};

  onDateChange = (date) => {
    this.setState(() => ({date}));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }))
  }

generateTimesRepeat = (date, times) => {
  let startDate = new Date(date);
  times = parseInt(times, 10);
  let timesRepeat = [];
  let id;
  for(let i=0; i<times; i++){
    id = uuid();
    startDate.setDate(startDate.getDate() + i);
    timesRepeat.push({id: id, date: startDate.toISOString().substring(0, 10), ready: false });

  }
  return timesRepeat;

}

  render(){
    const {name, times} = this.state;
  return (
    <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              required
              placeholder="name"
              name="name"
              value={name}
              autoFocus
              onChange={this.handleChange} />
            <label>
              Start date:
              <SingleDatePicker
                  date={this.state.date}
                  onDateChange = {this.onDateChange}
                  focused = {this.state.focused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  id="123"
                  />
            </label>
            <label>
              Days repeat:
              <input type="number"
                required
                min="1"
                max="100"
                name="times"
                value={times}
                onChange={this.onTimesChange} />
            </label>
            <button type="submit">+</button>
          </form>
          <div>{this.state.errorName} {this.state.errorTimes}</div>
    </div>
  )
}}

export default connect()(AddHabbit);
