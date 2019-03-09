import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../reducers/auth';

const Header = ( { startLogout}) => (
  <header>
      <ul>
        <li><NavLink to="/" exact={true}>Home</NavLink></li>
        <li><NavLink to="/to-do-list" >ToDo List</NavLink></li>
        <li><NavLink to="/habit-tracker" >Habit Tracker</NavLink></li>
        <li><NavLink to="/meal-planner" >Meal Planner</NavLink></li>
        <li><NavLink to="/month-planner" >Month Planner</NavLink></li>
        <button onClick={startLogout}>Logout</button>
    </ul>
  </header>
);

const mapDispatchToProps  = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(null, mapDispatchToProps)(Header);
