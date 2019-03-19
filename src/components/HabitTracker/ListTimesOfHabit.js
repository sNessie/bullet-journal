import React, {Component} from 'react';
import { connect } from 'react-redux';
import { startMakeHabit } from '../../reducers/habitsReducers';
import { visibleHabits } from '../../reducers/rootReducers';
import { Row, Button, Col } from 'react-materialize';
import './style.css';

class ListTimesOfHabit extends Component {
  constructor(props) {
    super(props);
  };
    handleClick = (id, key) => {
        this.props.dispatch(startMakeHabit(id, key));
    }
    render (){
        const timesList = this.props.times.map(time => {
            return(
            <Col s={2} key={time.id} className="habit">
					<span className="hidden">
						{time.date}
					</span>
                    {time.ready
					?
						<Button floating small className='red' icon='done' waves='light' disabled />
                    :
                    	<Button floating small className='red' waves='light' icon='done_outline'
							onClick={() => this.handleClick(time.id, this.props.habitId)}
					/>

                    }
            </Col>
            )
        });
        return (
            <Row>
                {timesList}
            </Row>
        )

    }
}

const mapStateToProps = (state) => {
    return {
      habits: visibleHabits(state.habits, state.filters)
    };
  }
export default connect(mapStateToProps)(ListTimesOfHabit);
