import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Button = styled.button`
     border: solid 1.5px black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 25px;
  color: black;
  font-weight:bold;
  text-align: center;

  &:hover {
    color: white;
    background: #0078e7;
  }

  ${'' /* @media (max-width: 540px)  {
  font-size: 1rem;
} */}
`

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;