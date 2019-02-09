import React from 'react';


const ListTimesOfHabit= ({times, makeReady}) => {
    const timesList = times.map(time => {
        return(
        <div>
            <div>
                date: {time.date}
            </div>
            <div>
                ready: {time.ready ? 'yes' :'no'} 
                <button onClick={makeReady}>Make ready</button>
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