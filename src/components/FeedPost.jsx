import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { GrLike } from "react-icons/gr";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";

function FeedPost({ ProfilePic, username, message, image, timestamp }) {
  return (
    <PostStyle>
      <PostTop>
        <Avatar src={ProfilePic} style={{ marginRight: "10px" }}></Avatar>
        <PostTopInfo>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate).toUTCString()}</p>
        </PostTopInfo>
      </PostTop>
      <PostBottom>
        <p>{message}</p>
      </PostBottom>
      <PostImage>
        <img src={image} alt="" />
      </PostImage>
      <PostOptions>
        <PostOptionsContent>
          <GrLike></GrLike>
          <p>Like</p>
        </PostOptionsContent>
        <PostOptionsContent>
          <GoComment></GoComment>
          <p>Comment</p>
        </PostOptionsContent>
        <PostOptionsContent>
          <RiShareForwardLine></RiShareForwardLine>
          <p>Share</p>
        </PostOptionsContent>
      </PostOptions>
    </PostStyle>
  );
}

const PostStyle = styled.div`
  width: 640px;
  margin-top: 15px;
  border-radius: 15px;
  background-color: var(--feed-background);
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
  margin-bottom: 10px;

  @media only screen and (max-width: 1365px) {
    width: 70%;
  }

  @media only screen and (max-width: 1300px) {
    width: 55%;
  }

  @media only screen and (max-width: 1074px) {
    width: 80%;
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

const PostTop = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 15px;
`;

const PostTopInfo = styled.div`
  h3 {
    font-size: medium;
  }

  p {
    font-size: x-small;
    color: var(--icon-color);
  }
`;

const PostBottom = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 25px;
`;

const PostImage = styled.div`
  img {
    width: 100%;
  }
`;

const PostOptions = styled.div`
  padding-top: 10px;
  border-top: 1px solid lightgray;
  display: flex;
  justify-content: space-evenly;
  font-size: medium;
  color: #808080;
  cursor: pointer;
  padding: 15px;
`;

const PostOptionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  flex: 1;

  p {
    margin-left: 10px;
  }

  &:hover {
    background-color: var(--feed-2);
    border-radius: 10px;
  }
`;

export default FeedPost;
