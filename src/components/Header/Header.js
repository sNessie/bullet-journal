import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../reducers/auth";
import PropTypes from "prop-types";
import HeaderUl from "../../layout/header/HeaderUl";
import HeaderLi from "../../layout/header/HeaderLi";
import Layout from "../../layout/Layout";
import Button from "../../layout/Button";

const Header = ({ startLogout }) => (
  <Layout>
    <HeaderUl>
      <HeaderLi as={NavLink} to="/dashboard" activeClassName="active">
        Dashboard
      </HeaderLi>
      <HeaderLi as={NavLink} to="/to-do-list" activeClassName="active">
        ToDo List
      </HeaderLi>
      <HeaderLi as={NavLink} to="/habit-tracker" activeClassName="active">
        Habit Tracker
      </HeaderLi>
      <HeaderLi as={NavLink} to="/meal-planner" activeClassName="active">
        Meal Planner
      </HeaderLi>
      <HeaderLi as={NavLink} to="/month-planner" activeClassName="active">
        Month Planner
      </HeaderLi>
      <Button onClick={startLogout}>Logout</Button>
    </HeaderUl>
  </Layout>
);

Header.propTypes = {
  startLogout: PropTypes.func.isRequired
};
const mapDispatchToProps = {
  startLogout
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
