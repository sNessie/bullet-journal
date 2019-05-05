import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Layout from "../layout/Layout";

const PublicRoute = ({ isAuthentticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      !isAuthentticated ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);
PublicRoute.propTypes = {
  isAuthentticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthentticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
