import React from "react";
import styled from "styled-components";

function SidebarOptions(props) {
  return (
    <SideBarOptionStyle>
      <SidebarIcon>{props.icon}</SidebarIcon>
      <SidebarText>
        <h3>{props.text}</h3>
      </SidebarText>
    </SideBarOptionStyle>
  );
}

const SideBarOptionStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  width: 100%;

  svg {
    color: var(--primary-color);
  }

  &:hover {
    background: var(--background-shade);
    width: 100%;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
    color: var(--primary-color);

    svg {
      color: var(--primary-color);
    }
  }
`;

const SidebarIcon = styled.div`
  font-size: 30px;
  padding-right: 10px;
`;

const SidebarText = styled.div`
  h3 {
    padding-left: 10px;
    width: 100%;
  }
`;

export default SidebarOptions;
