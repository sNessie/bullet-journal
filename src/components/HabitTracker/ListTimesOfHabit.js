import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startMakeHabit } from '../../reducers/habitsReducers';
import { visibleHabits } from '../../reducers/rootReducers';

class ListTimesOfHabit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: this.props.key
    }
  };
    handleClick = (id, key) => {
        this.props.dispatch(startMakeHabit(id, key));
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
                    {time.ready ? ''
                    :
                    <button  onClick={() => this.handleClick(time.id, this.props.habitId)}>
                        Make ready
                    </button>
                    }
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
