import React from 'react';
import ListTimesOfHabit from './ListTimesOfHabit';


const ListHabits = ({habits}) => {
    const habitsList = habits.map(habit => {
        return (
            <div>
            <h1>
                {habit.name}
            </h1>
            <div>
                Date of starting: {habit.date}
            </div>
            <div>
                Times to repeat: {habit.times}
            </div>
            <div>
                Ready:
                <ListTimesOfHabit />
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

export default ListHabits;