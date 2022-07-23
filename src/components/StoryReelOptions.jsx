import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function StoryReelOptions(props) {
  return (
    <StoryOptionStyle style={{ backgroundImage: `url(${props.img})` }}>
      <Avatar
        src={props.profileSrc}
        style={{ margin: "10px", border: "5px solid #1b74e4" }}
      ></Avatar>
      <h4>{props.title}</h4>
    </StoryOptionStyle>
  );
}

const StoryOptionStyle = styled.div`
  position: relative;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 200px;
  box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  margin-right: 10px;
  transition: transform 100ms ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(1.07);
    opacity: 0.9;
  }

  h4 {
    position: absolute;
    bottom: 20px;
    left: 10px;
    color: #ffffff;
  }
`;

export default StoryReelOptions;
