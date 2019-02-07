import React, {Component} from 'react';
import AddHabit from './AddHabit';
import uuid from 'uuid';


class HabitTracker extends Component {
  state = {
    showAddForm: false,
    habits: []
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

  render (){
    const {showAddForm} = this.state;
    return(
      <div>
        <button onClick={this.showForm}>
        {showAddForm ? 'Hide add form' :'Show add form'}
        </button>
        {showAddForm ? <AddHabit handleSave={this.handleSave} /> : null }
      </div>
    )
  }
}

export default HabitTracker;
