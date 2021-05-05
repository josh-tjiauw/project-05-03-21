import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomeNavbar from './components/navbar';

export default function App() {
  return (
    <Router>
      <div>
        <HomeNavbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
