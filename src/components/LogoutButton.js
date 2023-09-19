import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Button = styled.button`
     border: solid 1.5px black;
  cursor: pointer;
  border-radius: 25px;
  color: black;
  font-weight:bold;
  text-align: center;
  width: 6rem;
  height: 2.5rem;
  margin-top: 0.7rem;

  &:hover {
    color: white;
    background: #0078e7;
  }
`
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      LogOut 
    </Button>
  );
};

export default LogoutButton;