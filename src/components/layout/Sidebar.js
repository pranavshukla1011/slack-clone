import React, { Fragment, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { auth, db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../../redux/actions/ChannelActions';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from 'firebase';

const Sidebar = () => {
  const [rooms, loading, error] = useCollection(
    db.collection('rooms').orderBy('timeStamp', 'asc')
  );

  const dispatch = useDispatch();

  const [user] = useAuthState(auth);

  // Item Options
  const OptionItem = ({ icon, title, addChannelOption, id }) => {
    const addChannel = async () => {
      console.log('add channel fired');
      const channelName = prompt('Enter Channel Name');
      if (channelName) {
        try {
          await db.collection('rooms').add({
            name: channelName,
            email: user?.email,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          console.log(`${channelName} set`);
        } catch (err) {
          console.log('data not loaded');
          console.log(err.message);
        }
      }
    };

    const selectChannel = () => {
      console.log('select channel fired');
      {
        id && dispatch(enterRoom(id));
      }
    };

    return (
      <Fragment>
        <OptionsContainer
          onClick={addChannelOption ? addChannel : selectChannel}
        >
          <OptionContent left>
            {icon ? (
              <span className='material-icons'>{icon}</span>
            ) : (
              <span className='material-icons'>tag</span>
            )}
          </OptionContent>
          {icon ? (
            <OptionContent right>
              <p> {title} </p>
            </OptionContent>
          ) : (
            <OptionContent right>
              <p> {title} </p>
            </OptionContent>
          )}
        </OptionsContainer>
      </Fragment>
    );
  };

  //   SIDEBAR HEADER  ----default export
  const SidebarHeader = ({ username, name, isOnline }) => {
    return (
      <Fragment>
        <HeaderContainer>
          {/* Sidebar Header */}
          <HeaderContent left>
            <h3>{username}</h3>
            <p>
              <i
                className='material-icons'
                style={{ color: isOnline ? 'green' : 'grey', fontSize: '16px' }}
              >
                fiber_manual_record
              </i>
              {name}
            </p>
          </HeaderContent>
          <HeaderContent right>
            <i className='material-icons'>edit</i>
          </HeaderContent>
        </HeaderContainer>
      </Fragment>
    );
  };

  return (
    <SidebarContainer>
      <SidebarHeader
        username={user?.email?.split('@')[0]}
        name={user?.displayName}
        isOnline
      ></SidebarHeader>

      <SidebarBody>
        <OptionItem icon='comment' title='Threads'></OptionItem>
        <OptionItem
          icon='video_label'
          title=' Mentions and Reactions'
        ></OptionItem>
        <OptionItem icon='drafts' title='Saved Items'></OptionItem>
        <OptionItem icon='turned_in_not' title='Channel Browser'></OptionItem>
        <OptionItem icon='people_alt' title='People & user groups'></OptionItem>
        <OptionItem icon='apps' title='Apps'></OptionItem>
        <OptionItem icon='content_copy' title='File Browser'></OptionItem>
        {/* show Less button */}
        <OptionItem icon='expand_less' title='Show Less'></OptionItem>

        {/* Channels */}

        <ChannelHeaderContainer>
          {/* show channel button */}
          <OptionItem icon='expand_more' title='Channels'></OptionItem>
        </ChannelHeaderContainer>

        {/* Channel Options */}

        <OptionItem
          icon='add'
          title='Add Channel'
          addChannelOption
        ></OptionItem>

        {rooms &&
          rooms.docs.map((doc) => (
            <OptionItem
              key={doc.id}
              id={doc.id}
              title={doc.data().name}
            ></OptionItem>
          ))}
      </SidebarBody>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  width: fit-content;
  color: white;
  height: 100%;
  flex: 0.2;
  min-width: 300px;
  overflow-y: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #49274b;
  border-bottom: 1px solid #49274b;
  padding: 10px 20px;
  align-items: center;
`;

const HeaderContent = styled.div`
  ${(props) =>
    props.left &&
    css`
      p {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 5px;
      }
    `}

  ${(props) =>
    props.right &&
    css`
      i {
        background-color: white;
        color: black;
        padding: 10px;
        border-radius: 50%;
        transition-property: background-color, color;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
        :hover {
          cursor: pointer;
          background-color: var(--slack-color);
          color: white;
        }
      }
    `}
`;

const SidebarBody = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

const OptionsContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  transition-property: background-color, color;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: white;
    color: var(--slack-color);
  }
`;

const OptionContent = styled.div`
  span {
    font-size: 20px;
  }
  ${(props) =>
    props.left &&
    css`
      margin-right: 10px;
    `}
  ${(props) => props.right && css``}
`;

const ChannelHeaderContainer = styled.div`
  display: flex;
  border-top: 1px solid #49274b;
  border-bottom: 1px solid #49274b;
  padding: 20px 0;
  margin: 20px 0;
  align-items: center;
  transition-property: background-color, color;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    background-color: white;
    color: var(--slack-color);
  }
`;
export default Sidebar;
