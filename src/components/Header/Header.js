import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../reducers/auth';
import './header.css';

const Header = ( { startLogout}) => (
  <header>
      <ul>
        <li><NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink></li>
        <li><NavLink to="/to-do-list" activeClassName="is-active" >ToDo List</NavLink></li>
        <li><NavLink to="/habit-tracker" activeClassName="is-active" >Habit Tracker</NavLink></li>
        <li><NavLink to="/meal-planner" activeClassName="is-active" >Meal Planner</NavLink></li>
        <li><NavLink to="/month-planner" activeClassName="is-active" >Month Planner</NavLink></li>
        <button onClick={startLogout}>Logout</button>
    </ul>
  </header>
);

const mapDispatchToProps  = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
