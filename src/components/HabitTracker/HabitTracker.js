import React, {Component} from 'react';
import AddHabit from './AddHabit';


class HabitTracker extends Component {
  state = {
    showAddForm: false, 
  }

  showForm = () => {
    this.setState((prevState, props) => {
      return{
        showAddForm: !prevState.showAddForm
      }
    });
  }

  render (){
    const {showAddForm} = this.state;
    return(
      <div>
        <button onClick={this.showForm}>
        {showAddForm ? 'Hide add form' :'Show add form'}
        </button>
        {showAddForm ? <AddHabit /> : null }
      </div>
    )
  }
}

export default HabitTracker;
