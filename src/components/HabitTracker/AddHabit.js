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
    console.log(this.state);
};

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
