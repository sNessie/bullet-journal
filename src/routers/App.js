import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage/DashboardPage';
import HabitTracker from '../components/HabitTracker/HabitTracker';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';
import ToDoList from '../components/ToDoList/ToDoList';
import MealPlanner from '../components/MealPlanner/MealPlanner';
import MonthPlanner from '../components/MonthPlanner/MonthPlanner';
import Header from '../components/Header/Header';
import LoginPage from '../components/Login/LoginPage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} exact={true} />
        <Route path="/to-do-list" component={ToDoList} />
        <Route path="/habit-tracker" component={HabitTracker} />
        <Route path="/meal-planner" component={MealPlanner} />
        <Route path="/month-planner" component={MonthPlanner} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);


export default AppRouter;
