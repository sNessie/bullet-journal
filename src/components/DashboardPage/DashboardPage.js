import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { amountTodos } from "../../reducers/rootReducers";

const DashboardPage = ({ dashboard }) => {
  return (
    <>
      <Helmet>
        <title>Dashboard Page - Bullet Journal</title>
      </Helmet>
      <h1>You have {dashboard.todoAmount} todos to do.</h1>
    </>
  );
};

DashboardPage.propTypes = {
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    dashboard: amountTodos(state.todos)
  };
};

export default connect(mapStateToProps)(DashboardPage);
