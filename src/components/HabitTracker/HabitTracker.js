import React, {Component} from 'react';
import AddHabit from './AddHabit';
import uuid from 'uuid';
import ListHabits from './ListHabits';
import FiltersForm from "./FiltersForm";
import {Button, Row, Col } from 'react-materialize';



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
      <Row className="container">
          <Row>
            <FiltersForm />
            <Col className="right">
                <Button waves='light' onClick={this.showForm} >
                    {showAddForm ? 'Hide add form' :'Show add form'}
                </Button>
              </Col>
          </Row>
            {showAddForm ? <AddHabit showForm={this.showForm} /> : null }
            <ListHabits  />
      </Row>
    )
  }
};

export default HabitTracker;
