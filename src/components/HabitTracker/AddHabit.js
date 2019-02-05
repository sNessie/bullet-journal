import React, {Component} from 'react';


class AddHabbit extends Component{
  render(){
  return (
    <div>
          <form>
            <input type="text"
              required 
              placeholder="name"
              name="name"/>
            <label>
              Start date:
              <input type="date"
                required />
            </label>
            <label>
              Days repeat:
              <input type="number"
                required 
                min="1" 
                max="60"/>
            </label>
            <button type="submit">+</button>
          </form>
    </div>
  )
}}

export default AddHabbit
