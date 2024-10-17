import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ReportsPage from './pages/ReportsPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/reports" component={ReportsPage} />
        <Route path="/transactions" component={TransactionsPage} />
      </Switch>
    </Router>
  );
}

export default App;
