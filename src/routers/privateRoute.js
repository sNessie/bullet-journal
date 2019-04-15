import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";

const PrivateRoute = ({ isAuthentticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthentticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
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
