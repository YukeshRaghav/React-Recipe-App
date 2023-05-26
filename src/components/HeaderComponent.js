import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './ProfileComponent';
import { useAuth0 } from "@auth0/auth0-react";
import './Header.css';
import { useState } from 'react';

function refreshPage(){
  window.location.reload();
} 


export const HeaderComponent = (props) => {
  const [showMedia, setShowMedia] = useState(false);

  const {  isAuthenticated } = useAuth0();

 return ( 
   <div className='header'>

   <div className="appNameComponent" onClick={refreshPage}>
      <img className='appIcon' src='/logo.svg' alt='app logo'/>
      Recipe Finder
      </div>

     
      

     
    <div className={showMedia ? 'menuIcon-content mobile-menu-link' : 'menuIcon-content'} >

    <div className='searchComponent'>
        <img className='searchIcon' src='/search.svg' alt='search icon'/>
        <input className='searchInput' placeholder='Search Recipes' onChange={props.Change}/>
      </div>
   
    
   
      

      <div className='auth'>
      {
        isAuthenticated ? 
        <span style={{display:"flex"}}>
        <Profile  className="profile-details"/>
        <LogoutButton className="auth-logout-btn"/>         
        </span>:<span> <LoginButton className="auth-login-btn"/></span>
      }
      </div>

      </div>
    
      <img className ="menuIcon" onClick={() => setShowMedia(!showMedia)} src="/menu-icon.svg" alt='menu icon'/>
    
      
     
      
      
      </div>
 );
}