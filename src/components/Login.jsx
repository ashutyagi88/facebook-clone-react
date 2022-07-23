import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <LoginStyle>
      <LoginLogo>
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </LoginLogo>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: var(--background-shade);

  button {
    width: 300px;
    background-color: var(--primary-color);
    color: var(--feed-2);
    font-weight: 800;

    &:hover {
      background-color: var(--feed-2);
      color: var(--primary-color);
    }
  }
`;

const LoginLogo = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: contain;
    height: 150px;
  }
`;

export default Login;
