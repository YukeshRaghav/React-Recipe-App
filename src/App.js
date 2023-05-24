import styled from 'styled-components';
import { HeaderComponent } from './components/HeaderComponent';
import { RecipeListContainer, RecipeComponent} from './components/RecipeComponent';
import { useState } from 'react';
import Axios from 'axios';
import { IntroComponent } from './components/IntroComponent';


const APP_ID = "b1a5affc";
const APP_KEY = "ce7f444198469b85b3d74c9ef6b37284";

const Container = styled.div`
display: flex;
flex-direction: column;

`

// const Placeholder = styled.img`
//   width: 120px;
//   height:120px;
//   margin: 200px;
//   opacity: 0.5;
// `




function App() {


  // here we need to call the Api only after  a certain time interval when the 
  //user has stoped entering the input because of the APi call limitation i.e 10/ minute
  //hence we use the concept call "Debouncing"
  const [timeoutId , updateTimeoutId] = useState();


  const [recipeList , updateRecipeList] = useState([]); //Initilizing with an empty array

// Async await fn
   const fetchRecipe = async(searchString) => {
     const response =  await Axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      updateRecipeList((response.data.hits).slice(0,10)); //updating the recipe list array
      
    };

  const onTextChange = (e) => {

    clearTimeout(timeoutId); //The global clearTimeout() method cancels a timeout previously established by calling setTimeout().
    const timeout = setTimeout(() => fetchRecipe(e.target.value),500); //created a settimeout function which will be called
                                                                      // after the 500ms or 5 sec
    updateTimeoutId(timeout); // updating the timeoutid using usestate hook
                              // before updating we are clearing the value set to timeout ID 
      
  };

  return (
    <Container>
      
    <HeaderComponent Change = {onTextChange}/>
      <RecipeListContainer> 

      {recipeList.length ? //checks the length of the recipelist array which has been updated by updateRecipeList & if true
          recipeList.map((recipeObj) => ( //maps through the array by creating an recipeObj which has been assignrd all the data
        <RecipeComponent recipeObj = {recipeObj.recipe}/> // here the recipeObj has been called every time and the RecipeComponent has been called and it will called as many times as the length of the array
          )): <IntroComponent change={onTextChange}/>
         // <Placeholder src = "/logo.svg" /> 
        }

      </RecipeListContainer>
     
    </Container>
    
  );
}

export default App;
