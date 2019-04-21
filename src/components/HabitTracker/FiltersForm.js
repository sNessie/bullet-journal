import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../../reducers/filtersReducers";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Input from "../../layout/form/Input";
import Label from "../../layout/form/Label";
import FormGroup from "../../layout/form/FormGroup";

const FiltersForm = ({ filters, actions }) => {
  const handleChange = e => {
    actions.setTextFilter(e.target.value);
  };
  return (
    <FormGroup>
      <Input
        type="text"
        name="search"
        value={filters.text}
        onChange={handleChange}
      />
      <Label htmlFor="search">search</Label>
    </FormGroup>
  );
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
