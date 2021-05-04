import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

const Sidebar = () => {
  // Item Options
  const OptionItem = ({ icon, title, addChannelOption }) => {
    const addChannel = () => {};

    const selectChannel = () => {};
    return (
      <Fragment>
        <OptionsContainer
          onClick={addChannelOption ? addChannel : selectChannel}
        >
          <OptionContent left>
            {icon ? (
              <span class='material-icons'>{icon}</span>
            ) : (
              <span class='material-icons'>tag</span>
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
                class='material-icons'
                style={{ color: isOnline ? 'green' : 'grey', fontSize: '16px' }}
              >
                fiber_manual_record
              </i>
              {name}
            </p>
          </HeaderContent>
          <HeaderContent right>
            <i class='material-icons'>edit</i>
          </HeaderContent>
        </HeaderContainer>
      </Fragment>
    );
  };

  return (
    <SidebarContainer>
      <SidebarHeader
        username='shuklapranav1011'
        name='Pranav Shukla'
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
          <OptionItem
            icon='expand_more'
            title='Channels'
            showChannel
          ></OptionItem>
        </ChannelHeaderContainer>

        {/* Channel Options */}

        <OptionItem
          icon='add'
          title='Add Channel'
          addChannelOption
        ></OptionItem>

        <OptionItem title='Youtube'></OptionItem>
        <OptionItem title='Discord'></OptionItem>
        <OptionItem title='Twitch'></OptionItem>
      </SidebarBody>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  width: fit-content;
  color: white;
  height: 100vh;
  width: 30vh;
  overflow: auto;
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
        &:hover {
          cursor: pointer;
          opacity: 0.7;
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
  &:hover {
    cursor: pointer;
    opacity: 0.7;
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
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
export default Sidebar;
