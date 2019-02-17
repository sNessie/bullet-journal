import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../reducers/filtersReducers';


const FiltersForm = (props) => {
    return (
        <div>
        <input
            type="text"
            placeholder="search"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
            />
    </div>
)};

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  }

export default connect(mapStateToProps)(FiltersForm);