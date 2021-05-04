import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Home from './components/pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Fragment>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Navbar></Navbar>
          <Sidebar></Sidebar>
          <AppBody>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/about'>
                About
              </Route>
              <Route exact path='/users'>
                Users
              </Route>
            </Switch>
          </AppBody>
        </Fragment>
      </Router>
    </Fragment>
  );
}

const AppBody = styled.div``;
export default App;
