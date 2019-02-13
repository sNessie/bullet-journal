import React from 'react';
import ListTimesOfHabit from './ListTimesOfHabit';
import { connect } from 'react-redux';
import { visibleHabits } from '../../reducers/rootReducers';


const ListHabits = ({ habits }) => {
    const habitsList = habits.map(habit => {
        return (
            <div key={habit.id}>
            <h1>
                {habit.name}
            </h1>
            <button>Remove</button>
            <div>
                Date of starting: {habit.date}
            </div>
            <div>
                Times to repeat: {habit.times}
            </div>
            <div>
                Ready:
                <ListTimesOfHabit times={habit.timesRepeat} />
            </div>
            </div>

        );
    })
    return (
        <div>
            {habitsList}
        </div>
    )

};
const mapStateToProps = (state) => {
    return {
      habits: visibleHabits(state.habits, state.filters)
    };
  }

export default connect(mapStateToProps)(ListHabits);