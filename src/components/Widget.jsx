import React from "react";
import styled from "styled-components";

function Widget() {
  return (
    <WidgetStyle>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbbcnews&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="encrypted-media"
      ></iframe>
    </WidgetStyle>
  );
}

const WidgetStyle = styled.div`
  flex: 0.2;
  position: absolute;
  left: 75vw;
  height: 100vh;
  margin-top: 20px;
  background-color: var(--background-shade-2);

  @media only screen and (max-width: 1365px) {
    left: 74vw;
  }

  @media only screen and (max-width: 1300px) {
    left: 72vw;
  }

  @media only screen and (max-width: 1265px) {
    left: 71vw;
  }

  @media only screen and (max-width: 1150px) {
    left: 69vw;
  }

  @media only screen and (max-width: 1150px) {
    iframe {
      width: 320px;
    }
  }

  @media only screen and (max-width: 1174px) {
    iframe {
      width: 340px;
    }

    left: 68vw;
  }

  @media only screen and (max-width: 1074px) {
    iframe {
      width: 340px;
    }

    left: 65vw;
  }
  @media only screen and (max-width: 980px) {
    left: 64vw;
  }

  @media only screen and (max-width: 944px) {
    left: 63vw;
  }

  @media only screen and (max-width: 906px) {
    display: none;
  }
`;

export default Widget;
