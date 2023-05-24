import styled from 'styled-components';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './ProfileComponent';
import { useAuth0 } from "@auth0/auth0-react";

 const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow:0 3px 6px 0 #555;
align-items: center;
width: 100%;
`
 const AppIcon = styled.img`
width: 36px;
height: 36px;
margin: 15px;

`
 const AppNameComponent = styled.div`
display: flex;
align-items: center;
cursor: pointer;
@media (max-width: 768px)  {
  font-size: 1.3rem;
  margin-right: 2rem;
}
`


export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background: white;
padding: 10px;
border-radius: 6px;
width: 50%;
border: 1px solid black;
@media (max-width: 768px) {
}
`

 export const SearchIcon = styled.img`
width: 32px;
height: 32px;
`

export const SearchInput = styled.input`
border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;

`
function refreshPage(){
  window.location.reload();
} 


export const HeaderComponent = (props) => {

  const {  isAuthenticated } = useAuth0();

 return ( <Header>
      <AppNameComponent onClick={refreshPage}>
      <AppIcon src='/logo.svg' />
      Recipe Finder
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src='/search.svg'/>
        <SearchInput placeholder='Search Recipes' onChange={props.Change}/>
      </SearchComponent>
    
      {
        isAuthenticated ? 
        <span style={{display:"flex"}}>
        <Profile />
        <LogoutButton />         
        </span>: <LoginButton />
      }
      
      
      
      </Header>
 );
}