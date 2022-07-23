import React from "react";
import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import { Avatar } from "@material-ui/core";
import { FaUserFriends } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { ImDisplay } from "react-icons/im";
import { MdOutlineEvent, MdGroups } from "react-icons/md";
import { GiBackwardTime, GiDrop } from "react-icons/gi";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <SidebarOptionContainer>
      <SidebarOptions
        icon={
          <Avatar
            style={{ marginLeft: "-3px", marginRight: "-8px" }}
            src={user.photoURL}
          ></Avatar>
        }
        text={user.displayName}
      ></SidebarOptions>
      <SidebarOptions
        icon={<FaUserFriends></FaUserFriends>}
        text="Friends"
      ></SidebarOptions>
      <SidebarOptions
        icon={<MdGroups></MdGroups>}
        text="Groups"
      ></SidebarOptions>
      <SidebarOptions
        icon={<BsShop></BsShop>}
        text="Marketplace"
      ></SidebarOptions>
      <SidebarOptions
        icon={<ImDisplay></ImDisplay>}
        text="Watch"
      ></SidebarOptions>
      <SidebarOptions
        icon={<GiBackwardTime></GiBackwardTime>}
        text="Memories"
      ></SidebarOptions>
      <SidebarOptions
        icon={<GiDrop></GiDrop>}
        text="Blood Donations"
      ></SidebarOptions>
      <SidebarOptions
        icon={<MdOutlineEvent></MdOutlineEvent>}
        text="Events"
      ></SidebarOptions>
    </SidebarOptionContainer>
  );
}

const SidebarOptionContainer = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 0.2;
  margin-left: 5px;
  margin-top: 20px;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 100;
  background-color: var(--background-shade-2);

  @media only screen and (max-width: 1200px) {
    width: 10vw;
  }

  @media only screen and (max-width: 1074px) {
    display: none;
  }
`;

export default Sidebar;
