import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import FeedInput from "./FeedInput";
import { BsCameraVideoFill, BsFillEmojiSmileFill } from "react-icons/bs";
import { MdPhotoLibrary } from "react-icons/md";
import { useStateValue } from "./StateProvider";

function FeedPost() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <FeedPostInputStyle>
      <FeedPostTop>
        <Avatar src={user.photoURL}></Avatar>
        <FeedInput></FeedInput>
      </FeedPostTop>
      <FeedPostBottom>
        <FeedBottomOption>
          <BsCameraVideoFill style={{ color: "#FF0000" }}></BsCameraVideoFill>
          <h3>Live Video</h3>
        </FeedBottomOption>
        <FeedBottomOption>
          <MdPhotoLibrary style={{ color: "#0BDA51" }}></MdPhotoLibrary>
          <h3>Photo/Video</h3>
        </FeedBottomOption>
        <FeedBottomOption>
          <BsFillEmojiSmileFill
            style={{ color: "#FFEA00" }}
          ></BsFillEmojiSmileFill>
          <h3>Feeling/Activity</h3>
        </FeedBottomOption>
      </FeedPostBottom>
    </FeedPostInputStyle>
  );
}

const FeedPostInputStyle = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  background-color: var(--feed-background);
  border-radius: 15px;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
  width: 640px;

  @media only screen and (max-width: 1365px) {
    width: 70%;
  }

  @media only screen and (max-width: 1300px) {
    width: 55%;
  }

  @media only screen and (max-width: 1074px) {
    width: 80%;

    h3 {
      font-size: medium;
    }
  }

  @media only screen and (max-width: 984px) {
    width: 75%;
  }

  @media only screen and (max-width: 984px) {
    width: 70%;
  }

  @media only screen and (max-width: 906px) {
    width: 90%;
  }
`;

const FeedPostTop = styled.div`
  display: flex;
  border-bottom: 1px solid var(--feed-2);
  padding-bottom: 15px;
  padding: 15px;
`;

const FeedPostBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FeedBottomOption = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  color: var(--icon-color);
  margin: 5px;
  cursor: pointer;

  h3 {
    font-size: medium;
    margin-left: 10px;
  }

  &:hover {
    background-color: var(--background-shade-2);
    border-radius: 20px;
  }

  @media only screen and (max-width: 1300px) {
    h3 {
      font-size: x-small;
    }
  }
`;

export default FeedPost;
