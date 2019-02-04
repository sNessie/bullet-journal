import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
        <li><NavLink to="/add" activeClassName="is-active">Add Habit</NavLink></li>
    </ul>
  </header>
);

export default Header;