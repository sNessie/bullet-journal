import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../../reducers/auth";
import PropTypes from "prop-types";
import HeaderUl from "../../layout/header/HeaderUl";
import HeaderNav from "../../layout/header/HeaderNav";
import HeaderLi from "../../layout/header/HeaderLi";
import Layout from "../../layout/Layout";
import Button from "../../layout/Button";
import {
  MenuIcon,
  FirstIcon,
  SecondIcon,
  ThirdIcon
} from "../../layout/header/MenuIcon";

const Header = ({ startLogout }) => {
  const [menu, setMenu] = useState(false);
  function ToggleMenu(menu) {
    setMenu(!menu);
  }
  return (
    <Layout>
      <HeaderNav menu={menu}>
        <MenuIcon
          onClick={() => {
            ToggleMenu(menu);
          }}
        >
          <FirstIcon menu={menu} />
          <SecondIcon menu={menu} />
          <ThirdIcon menu={menu} />
        </MenuIcon>
        <HeaderUl menu={menu}>
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
      </HeaderNav>
    </Layout>
  );
};

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
