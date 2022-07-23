import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StoryReel from "./StoryReel";
import FeedPostInput from "./FeedPostInput";
import FeedPost from "./FeedPost";
import { useStateValue } from "./StateProvider";
import {
  addDoc,
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
  }, []);
  return (
    <FeedStyle>
      <StoryReel></StoryReel>
      <FeedPostInput></FeedPostInput>
      {posts.map((post) => (
        <FeedPost
          key={post.key}
          ProfilePic={post.profilePic}
          message={post.message}
          username={post.username}
          image={post.image}
          timestamp={post.timestamp}
        ></FeedPost>
      ))}
    </FeedStyle>
  );
}

const FeedStyle = styled.div`
  width: 60%;
  position: absolute;
  left: 20vw;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-shade-2);

  @media only screen and (max-width: 1365px) {
    left: 18.5vw;
  }

  @media only screen and (max-width: 1300px) {
    left: 18vw;
  }

  @media only screen and (max-width: 1200px) {
    left: 15.5vw;
  }

  @media only screen and (max-width: 1150px) {
    left: 15.5vw;
  }

  @media only screen and (max-width: 1100px) {
    left: 15.5vw;
  }

  @media only screen and (max-width: 1074px) {
    position: relative;
    left: 2vw;
  }

  @media only screen and (max-width: 906px) {
    position: relative;
    left: 20vw;
  }
`;

export default Feed;
