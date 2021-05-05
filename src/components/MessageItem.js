import React from 'react';
import styled, { css } from 'styled-components';

const MessageItem = ({ message, timeStamp, user, userImage }) => {
  return (
    <MessageContainer>
      <img src={userImage} alt='' />
      <MessageContent>
        <h4>
          {user} <span>{`${timeStamp?.toDate().toUTCString()}`}</span>
        </h4>
        <p>{message}</p>
      </MessageContent>
    </MessageContainer>
  );
};

export default MessageItem;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 40px;
    border-radius: 50%;
  }
`;

const MessageContent = styled.div`
  padding-left: 10px;

  > h4 > span {
    color: grey;
    font-weight: 300;
    font-size: 10px;
    margin-left: 4px;
  }
`;
