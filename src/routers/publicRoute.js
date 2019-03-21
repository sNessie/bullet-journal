import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ( {
  isAuthentticated,
  component: Component,
  ...rest
} ) => (
  <Route {...rest} component={ (props) => (
    !isAuthentticated ? (
        <Component {...props} />
    ) : (
      <Redirect to="/dashboard" />
    )
  )} />
);

const mapStateToProps = (state ) => ({
  isAuthentticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute);
