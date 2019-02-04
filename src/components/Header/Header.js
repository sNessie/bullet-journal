import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
      <ul>
        <li><NavLink to="/" exact={true}>Home</NavLink></li>
        <li><NavLink to="/to-do-list" >ToDo List</NavLink></li>
        <li><NavLink to="/habit-tracker" >Habit Tracker</NavLink></li>
        <li><NavLink to="/meal-planner" >Meal Planner</NavLink></li>
        <li><NavLink to="/month-planner" >Month Planner</NavLink></li>
    </ul>
  </header>
);

export default Header;