import React from 'react';
import ListTimesOfHabit from './ListTimesOfHabit';
import { connect } from 'react-redux';
import { visibleHabits } from '../../reducers/rootReducers';
import { removeHabit, startRemoveHabits } from '../../reducers/habitsReducers';
import {Row, Input, Icon, Card, CardTitle} from 'react-materialize';



const ListHabits = ({habits, dispatch}) => {
    const habitsList = habits.map(habit => {
        return (
            <Card className='col s4' key={habit.id}
				header={<CardTitle image='img/sample-1.jpg'>{habit.name}</CardTitle>}
			 	actions={<button onClick={() => {
                         dispatch(startRemoveHabits({id: habit.id}))
                     	}}>Remove</button>}>
            <div>
				<span className="blue-text">Date of starting: </span>
				 {habit.date}
            </div>
            <div>
				<span className="blue-text">Times to repeat: </span>
				{habit.times}
            </div>
            <div>
                <span className="blue-text">Ready:</span>
              	<ListTimesOfHabit habitId={habit.id} times={habit.timesRepeat} />
            </div>
            </Card>

        );
    })
    return (
        <Row>
            {habitsList}
        </Row>
    )

};
const mapStateToProps = (state) => {
    return {
      habits: visibleHabits(state.habits, state.filters)
    };
  }

export default connect(mapStateToProps)(ListHabits);
