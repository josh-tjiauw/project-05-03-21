import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HomeNavbar from './components/navbar';

export default function App() {
  return (
    <Router>
      <HomeNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
