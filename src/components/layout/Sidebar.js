import React from 'react';
import styled, { css } from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeaderContainer>
        {/* Sidebar Header */}
        <SidebarHeaderContent left>
          <h3>shuklapranav1011</h3>
          <p>
            <i
              class='material-icons'
              style={{ color: 'green', fontSize: '16px' }}
            >
              fiber_manual_record
            </i>
            Pranav Shukla
          </p>
        </SidebarHeaderContent>
        <SidebarHeaderContent right>
          <i class='material-icons'>edit</i>
        </SidebarHeaderContent>
        {/* SideBar body */}
      </SidebarHeaderContainer>

      <OptionContainer></OptionContainer>

      <ChannelContainer></ChannelContainer>
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

const SidebarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 10px 20px;
  align-items: center;
`;

const SidebarHeaderContent = styled.div`
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

const OptionContainer = styled.div``;

const ChannelContainer = styled.div``;
export default Sidebar;
