import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import ChatBox from './ChatBox';
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import MessageItem from './MessageItem';

const Chat = () => {
  const bottomRef = useRef(null);
  const rooms = useSelector((state) => state.rooms);

  const { roomID } = rooms;

  const [roomDetails] = useCollection(
    roomID && db.collection('rooms').doc(roomID)
  );

  const [messages, loading] = useCollection(
    roomID &&
      db
        .collection('rooms')
        .doc(roomID)
        .collection('messages')
        .orderBy('timeStamp', 'asc')
  );

  // console.log('room Details');
  // {
  //   roomID && roomDetails && console.log(roomDetails.data());
  // }

  // console.log('messages');
  // {
  //   roomID && messages && console.log(messages.docs.map((doc) => doc.data()));
  // }

  useEffect(() => {
    bottomRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [roomID, loading]);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>
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

        <ChatMessages>
          {messages?.docs.map((doc) => {
            const { message, timeStamp, user, userImage } = doc.data();
            return (
              <MessageItem
                key={doc.id} //message doc id
                message={message}
                timeStamp={timeStamp}
                user={user}
                userImage={userImage}
              />
            );
          })}
        </ChatMessages>

        <ChatBox
          roomID={roomID}
          bottomRef={bottomRef}
          roomName={roomDetails?.data().name}
        ></ChatBox>

        <div ref={bottomRef}></div>
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
  position: sticky;
  top: 0;
  background-color: white;
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

const ChatMessages = styled.div`
  padding-bottom: 150px;
`;
