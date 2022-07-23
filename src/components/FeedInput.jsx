import React, { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../firebase";

function FeedInput() {
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input && !inputURL) {
      alert("Enter an Input");
    } else {
      addDoc(collection(db, "posts"), {
        image: inputURL,
        message: input,
        profilePic: user.photoURL,
        timestamp: serverTimestamp(),
        username: user.displayName,
      });

      setInput("");
      setInputURL("");
    }
  };

  return (
    <FeedInputStyle>
      <form>
        <input
          type="text"
          placeholder={`What's on your Mind? ${user.displayName}`}
          style={{ flex: "1" }}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Image URL (Optional)"
          value={inputURL}
          onChange={(e) => {
            setInputURL(e.target.value);
          }}
        />
        <button onClick={handleSubmit} type="submit">
          Hidden
        </button>
      </form>
    </FeedInputStyle>
  );
}

const FeedInputStyle = styled.div`
  width: 100%;

  form {
    height: 100%;
    display: flex;

    input {
      outline-width: 0;
      border: none;
      padding: 5px 20px;
      margin: 0 10px;
      border-radius: 999px;
      background-color: var(--feed-2);
      font-family: var(--font-fam);

      @media only screen and (max-width: 1300px) {
        width: 10%;
        font-size: 10px;
      }
    }

    button {
      display: none;
    }
  }
`;

export default FeedInput;
