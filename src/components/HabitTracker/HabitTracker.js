import React, {Component} from 'react';
import AddHabit from './AddHabit';
import uuid from 'uuid';
import ListHabits from './ListHabits';
import FiltersForm from "./FiltersForm";
import { connect } from 'react-redux';
import { visibleHabits } from '../../reducers/rootReducers';


class HabitTracker extends Component {
  constructor(props){
    super(props);
    this.state = {
    showAddForm: false
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
        <FiltersForm />
        {showAddForm ? <AddHabit handleSave={this.handleSave} /> : null }
        <ListHabits habits={this.props.habits}  makeReady = {this.makeReady} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    habits: visibleHabits(state.habits, state.filters)
  };
}

export default connect(mapStateToProps)(HabitTracker);

