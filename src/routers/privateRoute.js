import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";
import Layout from "../layout/Layout";

const PrivateRoute = ({ isAuthentticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthentticated ? (
        <Layout>
          <Header />
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  isAuthentticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthentticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
