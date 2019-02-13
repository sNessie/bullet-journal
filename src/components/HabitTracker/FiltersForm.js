import React, { Component } from 'react';
import { connect } from 'react-redux';

class FiltersForm extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="search" value={this.props.filters.text}  />
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