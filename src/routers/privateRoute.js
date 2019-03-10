import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';

export const PrivateRoute = ( {
  isAuthentticated,
  component: Component,
  ...rest
} ) => (
  <Route {...rest} component={ (props) => (
    isAuthentticated ? (
      <div>
        <Header />
        <Component {...props} />
      </div>
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state ) => ({
  isAuthentticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);
