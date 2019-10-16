import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SphereComponent from './components/SphereComponent';
import ScreenARComponent from './components/ScreenARComponent';
import { history } from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          path="/"
          render={props => (
            <ScreenARComponent
              {...props}
              appData={this.props.appData}
            ></ScreenARComponent>
          )}
        ></Route>
        <Route path="/openImage" component={SphereComponent}></Route>
      </Router>
    );
  }
}

export default App;
