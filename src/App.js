import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Login from './components/Login';
import About from './components/About';
import Error from './components/Error';

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Provider store={store}>
      <Router>
        {loading ? (
          <p>Loading...</p>
        ) : !user ? (
          <Login></Login>
        ) : (
          <Fragment>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar></Navbar>

            <AppBody>
              <Sidebar></Sidebar>
              <Switch>
                <Route exact path='/' component={Chat}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route component={Error}></Route>
              </Switch>
            </AppBody>
          </Fragment>
        )}
      </Router>
    </Provider>
  );
};

const AppBody = styled.div`
  display: flex;
  height: 95vh;
  overflow-y: auto;
`;
export default App;
