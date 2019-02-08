import React from 'react';


const ListTimesOfHabit= ({times}) => {
    const timesList = times.map(time => {
        return(
        <div>
            <div>
                date: {time.date}
            </div>
            <div>
                ready:
                {time.ready ? 'yes' :'no'}
            </div>
        </div>
        )
    });
    return (
        <div>
            {timesList}
        </div>
    )

};

export default ListTimesOfHabit;