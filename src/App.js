import styled from 'styled-components';
import { Header , AppNameComponent, AppIcon, SearchComponent, SearchIcon, SearchInput} from './components/HeaderComponent';
import { RecipeListContainer,RecipeContainer,CoverImage,RecipeName,IngredientsText,SeeMoreText } from './components/RecipeComponent';
import { useState } from 'react';
import Axios from 'axios';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import DialogActions from '@mui/material/DialogActions';
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

const CuisineType = styled.span`
  margin-bottom: 12px;
  margin-left: 1rem;
`

const MealType = styled.span`
   margin-bottom: 12px;
   margin-left: 1rem;
`

const Calories = styled.span`
  margin-bottom: 12px;
  margin-left: 1rem;
`
const RecipeComponent = (props) => {
  const [show, setShow] = React.useState(false); //for dialog
  console.log("props", props);
  const {recipeObj} = props;
  return (
    <>


    <Dialog open={show}>
    <DialogTitle>{"Ingredients List"}</DialogTitle>
    <DialogContent>
    <table>
  <thead>
    <tr>
      <th>Ingredients</th>
      <th>Weight/Quantity</th>
    </tr>
  </thead>
  <tbody>
  {recipeObj.ingredients.map((ingredientsObj) => (
    <tr style={{}}>
      <td>{ingredientsObj.text}</td>
      <td style={{paddingLeft:"3rem"}}>{Math.round(ingredientsObj.weight)}</td>
    </tr>
  ))}
    
  </tbody>
</table>
        </DialogContent>
        <DialogActions>
          <IngredientsText onClick= {() => window.open(recipeObj.url)}>See More</IngredientsText>
          <SeeMoreText onClick={()=> setShow(false)}>Close</SeeMoreText>
        </DialogActions>
     </Dialog>
    <RecipeContainer>
          <CoverImage src={recipeObj.image}/>
          <RecipeName>
          {recipeObj.label}
          </RecipeName>
          <CuisineType>
           Cuisine Type : {recipeObj.cuisineType}
          </CuisineType>

          <MealType>
            Meal Type : {recipeObj.dishType} -<br /> <span >{recipeObj.mealType}</span>
          </MealType>

          <Calories>
            Calories : {Math.round(recipeObj.calories)}
          </Calories>

          <IngredientsText onClick={() => setShow(true)}>
          Ingredients List
          </IngredientsText>
             <SeeMoreText onClick={() => window.open(recipeObj.url)}>
          See Complete Recipe
          </SeeMoreText>

        </RecipeContainer>
        </>
  );
};

function refreshPage(){
  window.location.reload();
} 

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
      <Header>
      <AppNameComponent onClick={refreshPage}>
      <AppIcon src='/logo.svg' />
      Recipe Finder
      </AppNameComponent>
      <SearchComponent>
        <SearchIcon src='/search.svg'/>
        <SearchInput placeholder='Search Recipes' onChange={onTextChange}/>
      </SearchComponent>
      </Header>

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
