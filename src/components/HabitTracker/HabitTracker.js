import React, {Component} from 'react';
import AddHabit from './AddHabit';
import uuid from 'uuid';
import ListHabits from './ListHabits';
import { connect } from 'react-redux';


class HabitTracker extends Component {
  constructor(props){
    super(props);
    this.state = {
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
    this.setState(() => {
      const readyHabit = this.state.habits.find(h => (h.timesRepeat.find(t => t.id === i))); 
      const readyDayHabit = readyHabit.timesRepeat.find(t => t.id === i);
      readyDayHabit.ready = !readyDayHabit.ready;
      return{
        habits: [...this.state.habits]
      }
  })
  };

  render (){
    const { showAddForm } = this.state;
    return(
      <div>
        <button onClick={this.showForm}>
        {showAddForm ? 'Hide add form' :'Show add form'}
        </button>
        {showAddForm ? <AddHabit handleSave={this.handleSave} /> : null }
        <ListHabits habits={this.props.habits}  makeReady = {this.makeReady} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    habits: state.habits
  };
}

export default connect(mapStateToProps)(HabitTracker);

