import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled, { css } from 'styled-components';
import { auth } from '../../firebase';
import sampleImg from '../../img/sample-pic.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  let [user, loading] = useAuthState(auth);

  const logout = (e) => {
    e.preventDefault();
    auth.signOut();
  };

  return (
    <Fragment>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NavbarContainer>
          <NavbarStyle left>
            <RoundImg src={user?.photoURL} alt='<user_photo>' />
            <i className='material-icons'>schedule</i>
          </NavbarStyle>
          <NavbarStyle middle>
            <i className='material-icons' style={{ marginLeft: '10px' }}>
              search
            </i>
            <NavbarInput
              type='text'
              placeholder={`Search ...    #${user.displayName}`}
            />
          </NavbarStyle>
          <NavbarStyle right>
            <LinkStyle to='/'>Home</LinkStyle>
            <LinkStyle to='/about'>About</LinkStyle>
            <Button onClick={logout}>Logout</Button>
            {/* 
            <i className='material-icons'>help_outline</i> */}
          </NavbarStyle>
        </NavbarContainer>
      )}
    </Fragment>
  );
};

const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 1rem;
  background-color: var(--slack-color);
  padding: 10px 0;
  align-items: center;
`;
const NavbarStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--slack-color);
  color: white;

  > button {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: inherit;
    transition-property: background-color, color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    color: white;
    :hover {
      background-color: white;
      color: var(--slack-color);
      cursor: pointer;
    }
    padding: 0;
    margin-right: 10px;
  }

  ${(props) =>
    props.left &&
    css`
      justify-content: space-between;
      margin-left: 20px;
    `}
  ${(props) =>
    props.middle &&
    css`
      justify-content: center;
      background-color: #421f44;
      border-radius: 5px;
      border: white 0.5px solid;
      opacity: 0.7;
      height: 70%;
    `}
    ${(props) =>
    props.right &&
    css`
      justify-content: flex-end;
      margin-right: 20px;
    `};
`;

const RoundImg = styled.img`
  height: 40px;
  width: auto;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NavbarInput = styled.input`
  background-color: #421f44;
  color: white;
  text-align: center;
  border: none;
  width: 100%;
`;

const LinkStyle = styled(Link)`
  font-family: inherit;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.02857em;
  font-weight: 500;
  color: white;
  min-width: 64px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  color: white;
  :hover {
    background-color: white;
    color: var(--slack-color);
    cursor: pointer;
  }
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  padding: inherit;
  margin-right: 10px;
`;
export default Navbar;
