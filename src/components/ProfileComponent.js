import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
`

const H2 = styled.h2`
    font-size: 16px;
    margin-top: 16px;
    margin-right: 1rem;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 1rem;
    margin-left:2rem;
    margin-top: 10px;
`
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        <Img src={user.picture} alt={user.name} />
        <H2>{user.name}</H2>
        {/* <p>{user.email}</p> */}
      </Container>
    )
  );
};

export default Profile;