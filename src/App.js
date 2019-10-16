import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SphereComponent from './components/SphereComponent';
import ScreenARComponent from './components/ScreenARComponent';
import { history } from './history';

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={ScreenARComponent}></Route>
      <Route path="/openImage" component={SphereComponent}></Route>
    </Router>
  );
}

export default App;
