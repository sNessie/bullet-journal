import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../reducers/filtersReducers';

class FiltersForm extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="search" 
                    value={this.props.filters.text}  
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}
                    />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  }

export default connect(mapStateToProps)(FiltersForm);