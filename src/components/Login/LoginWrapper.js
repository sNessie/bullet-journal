import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../reducers/auth.js";
import PropTypes from "prop-types";
import LoginWrapper from "../../layout/loginPage/LoginWrapper";

const LoginPage = ({ startLogin }) => {
  return (
    <LoginWrapper>
      <button onClick={startLogin}>Login</button>
    </LoginWrapper>
  );
};

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
