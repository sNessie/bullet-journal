import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../../reducers/filtersReducers';
import {Row, Input, Icon} from 'react-materialize';


const FiltersForm = (props) => {
    return (
        <Row>
        <Input
            s={4}
            label="Search"
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }}
            >
          <Icon>search</Icon>
        </Input>
    </Row>
)};

const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  }

export default connect(mapStateToProps)(FiltersForm);
