import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import StoryReelOptions from "./StoryReelOptions";

function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <StoryReelStyle>
      <StoryReelOptions
        img="https://picsum.photos/120/200?random=1"
        profileSrc={user.photoURL}
        title={user.displayName}
      ></StoryReelOptions>
      <StoryReelOptions
        img="https://picsum.photos/120/200?random=2"
        profileSrc="https://scontent.fagr1-2.fna.fbcdn.net/v/t1.6435-1/164801827_284515636377501_3430430753101099534_n.jpg?stp=c0.0.120.120a_dst-jpg_p120x120&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=AEbNCmwM0gMAX-xaUUI&_nc_ht=scontent.fagr1-2.fna&oh=00_AT-r1YYs8RpduQZS5Xirisa5LO2bx5c6ZmDOzTc6NuJSVQ&oe=62E15276"
        title="Tom Cruise"
      ></StoryReelOptions>
      <StoryReelOptions
        img="https://picsum.photos/120/200?random=3"
        profileSrc="https://scontent.fagr1-2.fna.fbcdn.net/v/t1.6435-1/159525267_282628813230295_6950402713835931738_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=c6021c&_nc_ohc=B3oLs8HSSv0AX8poIOi&_nc_ht=scontent.fagr1-2.fna&oh=00_AT-7L7yIk9shaINOJW9qKcCtps9ZahMHuUmd_Rfav9rcDA&oe=62DF7F78"
        title="Kriti Sanon"
      ></StoryReelOptions>
      <StoryReelOptions
        img="https://picsum.photos/120/200?random=4"
        profileSrc="https://scontent.fagr1-2.fna.fbcdn.net/v/t1.6435-1/143527250_268572467960571_555300739818054970_n.jpg?stp=dst-jpg_p120x120&_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=gqfIvbQkJ2kAX8jE4Xc&_nc_ht=scontent.fagr1-2.fna&oh=00_AT9CXAxoqhUjWEnyLNQLpzRdeYuiIHjbYGsdGX-kj-agRw&oe=62E11910"
        title="The Rock"
      ></StoryReelOptions>
      <StoryReelOptions
        img="https://picsum.photos/120/200?random=5"
        profileSrc="https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/287471511_558069922375788_4774604384892144298_n.jpg?stp=c0.59.720.720a_dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=574b62&_nc_ohc=7GqKw8o4Q3YAX8ikSTo&_nc_ht=scontent.fagr1-4.fna&oh=00_AT8TI785BgFooHr6qVDYoovF6blJ_-QEL5p49uq7tbPahQ&oe=62C048BF"
        title="Alaya F"
      ></StoryReelOptions>
    </StoryReelStyle>
  );
}

const StoryReelStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;

  @media only screen and (max-width: 1365px) {
    width: 75%;
  }

  @media only screen and (max-width: 1300px) {
    width: 60%;
  }

  @media only screen and (max-width: 1074px) {
    width: 90%;
  }

  @media only screen and (max-width: 984px) {
    width: 80%;
  }

  @media only screen and (max-width: 984px) {
    width: 70%;
  }

  @media only screen and (max-width: 906px) {
    width: 100%;
  }
`;

export default StoryReel;
