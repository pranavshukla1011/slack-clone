import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Chat from './components/Chat';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Fragment>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar></Navbar>

            <AppBody>
              <Sidebar></Sidebar>
              <Switch>
                <Route exact path='/'>
                  {/* chat */}
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </Fragment>
        </Router>
      </Fragment>
    </Provider>
  );
};

const AppBody = styled.div`
  display: flex;
  height: 95vh;
  overflow-y: auto;
`;
export default App;
