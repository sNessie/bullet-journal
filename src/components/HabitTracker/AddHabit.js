import React, {Component} from 'react';
import uuid from 'uuid';


class AddHabbit extends Component{
  state = {
    id: uuid(),
    name: '',
    date: '',
    times: 0 ,
    timesRepeat: [{
      id: '',
      date: '',
      ready: false
    }],
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const timesRepeat = this.generateTimesRepeat(this.state.date, this.state.times);
    this.props.handleSave({...this.state, timesRepeat});
    this.setState(
      timesRepeat
    );
    this.setState({
      id: uuid(),
      name: '',
      date: '',
      times: 0,
      timesRepeat: [{
        id: '',
        date: '',
        ready: false
      }],
    });
};

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
    const {name, date, times} = this.state;
  return (
    <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              required 
              placeholder="name"
              name="name"
              value={name}
              onChange={this.handleChange} />
            <label>
              Start date:
              <input type="date"
              name = "date"
              value={date}
              onChange={this.handleChange}
                required />
            </label>
            <label>
              Days repeat:
              <input type="number"
                required 
                min="1" 
                max="60"
                name="times"
                value={times}
                onChange={this.handleChange} />
            </label>
            <button type="submit">+</button>
          </form>
    </div>
  )
}}

export default AddHabbit
