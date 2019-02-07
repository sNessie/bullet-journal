import React, {Component} from 'react';
import uuid from 'uuid';


class AddHabbit extends Component{
  state = {
    id: '',
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
    const id = uuid();
    this.setState({
      id: id,
      name: '',
      date: '',
      times: 0,
      timesRepeat: [{
        id: '',
        date: '',
        ready: false
      }],
      ready: 0
    });
    console.log(this.state);
  } ;

  render(){
  return (
    <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              required 
              placeholder="name"
              name="name"
              onChange={this.handleChange} />
            <label>
              Start date:
              <input type="date"
              name = "date"
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
                onChange={this.handleChange} />
            </label>
            <button type="submit">+</button>
          </form>
    </div>
  )
}}

export default AddHabbit
