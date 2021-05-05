import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '@material-ui/core';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatBox = ({ roomName, roomID, bottomRef }) => {
  const [text, setText] = useState('');

  const [user] = useAuthState(auth);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (!roomID) {
      return false;
    }

    db.collection('rooms').doc(roomID).collection('messages').add({
      message: text,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    setText('');

    console.log('message sent');

    bottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <ChatBoxContainer>
      <form>
        <input
          type='text'
          value={text}
          placeholder={`Message #${roomName}`}
          onChange={onChange}
        />
        <Button hidden type='submit' onClick={sendMessage}></Button>
      </form>
    </ChatBoxContainer>
  );
};

export default ChatBox;

const ChatBoxContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 20%;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 10px;
    outline: none;
    transition-property: width, padding;
    transition-timing-function: ease-in-out;
    transition-duration: 300ms;
    :focus {
      width: 60%;
      padding: 20px;
    }
  }
`;
