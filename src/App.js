import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import AddForm from './components/AddForm/AddForm';
import DashboardPage from './components/DashboardPage/DashboardPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Header from './components/Header/Header';


const App = () => (
    <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/add" component={AddForm} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);


export default App;
