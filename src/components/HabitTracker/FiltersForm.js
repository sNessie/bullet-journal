import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../../reducers/filtersReducers";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const FiltersForm = ({ filters, actions }) => {
  const handleChange = e => {
    actions.setTextFilter(e.target.value);
  };
  return <input type="text" value={filters.text} onChange={handleChange} />;
};

FiltersForm.propTypes = {
  filters: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      setTextFilter: bindActionCreators(setTextFilter, dispatch)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersForm);
