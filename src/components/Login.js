import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider).catch((err) => console.log(err.message));
  };
  return (
    <LoginContainer>
      <LoginLogoContainer>
        <img
          src='https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png'
          alt='slack_logo'
        />

        <h1>Sign In</h1>
        <p>slack-clone</p>

        <Button onClick={signIn}>Sign In via Google</Button>
      </LoginLogoContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginLogoContainer = styled.div`
  background-color: white;
  padding: 200px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 25px;
  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 30px;
    text-transform: inherit;
    background-color: #41af8e;
    color: white;
  }
`;
