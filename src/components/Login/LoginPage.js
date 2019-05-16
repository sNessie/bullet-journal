import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../../reducers/auth.js";
import PropTypes from "prop-types";
import LoginWrapper from "../../layout/loginPage/LoginWrapper";
import Button from "../../layout/Button";
import Layout from "../../layout/Layout";
import { Helmet } from "react-helmet";

const LoginPage = ({ startLogin }) => {
  return (
    <LoginWrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Layout>
        <Button onClick={startLogin}>Login</Button>
      </Layout>
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
