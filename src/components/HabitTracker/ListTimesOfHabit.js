import React from 'react';


const ListTimesOfHabit= ({times, makeReady}) => {
    const timesList = times.map(time => {
        return(
        <div key={time.id}>
            <div>
                date: {time.date}
            </div>
            <div>
                ready: {time.ready ? 'yes' :'no'} 
                <button  onClick={() => makeReady(time.id)}>Make ready</button>
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