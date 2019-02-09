import React, {Component} from 'react';
import AddHabit from './AddHabit';
import uuid from 'uuid';
import ListHabits from './ListHabits';


class HabitTracker extends Component {
  state = {
    showAddForm: false,
    habits: [
      {
        name: 'walk a dog',
        id: '0',
        date: '2019-02-01',
        times: 1, 
        timesRepeat: [{
          "id": 101,
          "date":"2018-09-05",
          "ready": false
        }]
      }
    ]
  }

  showForm = () => {
    this.setState((prevState, props) => {
      return{
        showAddForm: !prevState.showAddForm
      }
    });
  }

  handleSave = (habit) => {
    this.setState(() => {
      const newHabit = {...habit, id: uuid()}
      return{
         habits: [...this.state.habits, newHabit]
      }
  });
  };

  makeReady = (i) => {
    const habitReady = this.state.habits.find(h =>h.timesRepeat.find(t => t.id === i));
    return(
      console.log(`ready for id: ${habitReady.name}`)
    )
  };

  render (){
    const {showAddForm, habits} = this.state;
    return(
      <div>
        <button onClick={this.showForm}>
        {showAddForm ? 'Hide add form' :'Show add form'}
        </button>
        {showAddForm ? <AddHabit handleSave={this.handleSave} /> : null }
        <ListHabits habits={habits}  makeReady = {this.makeReady} />
      </div>
    )
  }
}

export default HabitTracker;
