import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import sampleImg from '../../img/sample-pic.jpg';

const Navbar = () => {
  return (
    <Fragment>
      <NavbarContainer>
        <NavbarStyle left>
          <RoundImg src={sampleImg} alt='' />
          <i class='material-icons'>schedule</i>
        </NavbarStyle>
        <NavbarStyle middle>
          <i class='material-icons' style={{ marginLeft: '10px' }}>
            search
          </i>
          <NavbarInput type='text' placeholder='Search...' />
        </NavbarStyle>
        <NavbarStyle right>
          <i class='material-icons'>help_outline</i>
        </NavbarStyle>
      </NavbarContainer>
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

export default Navbar;
