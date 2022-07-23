import React from "react";
import styled from "styled-components";
import { ReactComponent as FbLogo } from "../img/facebook-logo.svg";
import {
  MdOutlineSearch,
  MdNotifications,
  MdOutlineArrowDropDown,
  MdGroups,
} from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { ImDisplay } from "react-icons/im";
import { CgMenuGridO, CgGames } from "react-icons/cg";
import { RiMessengerFill } from "react-icons/ri";
import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <NavbarStyle>
      <Navbarleft>
        <Logo>
          <FbLogo></FbLogo>
        </Logo>
        <InputComp>
          <MdOutlineSearch />
          <input type="text" placeholder="Search Facebook"></input>
        </InputComp>
      </Navbarleft>
      <Navbarmiddle>
        <TiHomeOutline></TiHomeOutline>
        <ImDisplay></ImDisplay>
        <MdGroups style={{ fontSize: "1.8rem" }}></MdGroups>
        <CgGames style={{ fontSize: "1.8rem" }}></CgGames>
      </Navbarmiddle>
      <Navbarright>
        <RightAvatar>
          <Avatar style={{ marginRight: "10px" }} src={user.photoURL}></Avatar>
          <h4>{user.displayName}</h4>
        </RightAvatar>
        <RightIcons>
          <IconButton>
            <CgMenuGridO></CgMenuGridO>
          </IconButton>
          <IconButton>
            <RiMessengerFill></RiMessengerFill>
          </IconButton>
          <IconButton>
            <MdNotifications></MdNotifications>
          </IconButton>
          <IconButton>
            <MdOutlineArrowDropDown></MdOutlineArrowDropDown>
          </IconButton>
        </RightIcons>
      </Navbarright>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-shadow: 0 5px 2px -2px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #ffffff;
`;

const Navbarleft = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1365px) {
    padding-left: 0 10px;
  }
`;

const Logo = styled.div`
  height: 40px;
  svg {
    width: 2.5rem;
    padding: 0 10px 0 20px;
  }
`;

const InputComp = styled.div`
  display: flex;
  align-items: center;
  background: var(--background-shade);
  padding: 10px;
  border-radius: 20px;
  /* margin-bottom: 10px; */
  height: 20px;
  width: 14rem;

  input {
    border: none;
    background: var(--background-shade);
    padding: 0 10px;
    color: black;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;

    &:focus {
      outline: none;
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 12vw;

    input {
      width: 100%;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1174px) {
    input::placeholder {
      color: transparent;
    }
  }
`;

const Navbarmiddle = styled.div`
  margin: auto;
  display: flex;
  flex: 0.4;
  justify-content: space-around;
  align-items: center;

  svg {
    font-size: 1.5rem;
    padding: 10px 40px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background: var(--background-shade);
      transition: all 0.2s ease-in-out;
      color: var(--primary-color);

      svg {
        color: var(--primary-color);
      }
    }
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Navbarright = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1365px) {
    padding-right: 20px;
  }

  @media only screen and (max-width: 1320px) {
    margin-right: 10px;
  }
`;

const RightAvatar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: var(--background-shade);
    border-radius: 50px;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (max-width: 1365px) {
    width: 39%;
    margin-right: 1vw;
  }

  @media only screen and (max-width: 1320px) {
    margin-right: 1vw;
  }

  @media only screen and (max-width: 1260px) {
    margin-right: 2vw;
  }

  @media only screen and (max-width: 1220px) {
    margin-right: 2.5vw;
  }

  @media only screen and (max-width: 1174px) {
    h4 {
      display: none;
    }

    &:hover {
      background: none;
    }

    padding: 0;
    width: 15%;
    margin-right: 0vw;
  }

  @media only screen and (max-width: 900px) {
    width: 10%;
    margin-right: 5vw;
  }

  @media only screen and (max-width: 854px) {
    width: 10%;
    margin-right: 8vw;
  }
`;

const RightIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
  padding-right: 10px;

  svg {
    color: #000000;
  }

  @media only screen and (max-width: 1365px) {
    width: 39%;
  }

  @media only screen and (max-width: 900px) {
    width: 10%;
    padding-right: 4vw;
  }

  @media only screen and (max-width: 854px) {
    width: 10%;
    padding-right: 5vw;
  }
`;

export default Navbar;
