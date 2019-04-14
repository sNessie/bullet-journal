import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../reducers/auth.js";
import PropTypes from "prop-types";

const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
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
