import React from 'react';
import styled, { css } from 'styled-components';
import ChatBox from './ChatBox';
import { useSelector } from 'react-redux';
import { db } from '../firebase';

const Chat = () => {
  const rooms = useSelector((state) => state.rooms);

  const { roomID } = rooms;

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#Room-name</strong>
              <span className='material-icons'>star_border</span>
            </h4>
          </HeaderLeft>
          <HeaderRight>
            <p>
              <span className='material-icons-outlined'>info</span>
              Details
            </p>
          </HeaderRight>
        </Header>

        <ChatMessages> </ChatMessages>

        <ChatBox roomID={roomID}></ChatBox>
      </>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.8;
  min-width: 400px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px lightgray solid;
`;

const HeaderLeft = styled.div`
  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
  }
  > h4 > span {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > span {
    margin-right: 5px;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;
