import React, {Component} from 'react';
import { connect } from 'react-redux';
import { makeHabit } from '../../reducers/habitsReducers';
import { visibleHabits } from '../../reducers/rootReducers';

class ListTimesOfHabit extends Component {
    constructor(props){
        super(props)
    }
    handleClick = (id) => {
        
        this.props.dispatch(makeHabit(id));
    }
    render (){
        const timesList = this.props.times.map(time => {
            return(
            <div key={time.id}>
                <div>
                    date: {time.date}
                </div>
                <div>
                    ready: {time.ready ? 'yes' :'no'}
                    <button  onClick={() => this.handleClick(time.id)}>
                        Make ready
                    </button>
                </div>
            </div>
            )
        });
        return (
            <div>
                {timesList}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
      habits: visibleHabits(state.habits, state.filters)
    };
  }
export default connect(mapStateToProps)(ListTimesOfHabit);