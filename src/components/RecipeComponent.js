import React from 'react';
import styled from 'styled-components';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`

 const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
border-radius : 30px;
${'' /* border: 1px solid black; */}
`

 const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 25px ;

`

 const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
  text-align: center;
  margin-top: 1rem;

`

const Hr = styled.hr`
  border: 2px solid black;
  width: 60%;
margin-left: 20%;
margin-bottom: 0.75rem;
margin-top: -0.75rem;
border-radius: 100%;

`

 const IngredientsText = styled.span`
  font-size: 14px;
  border: solid 1.5px black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 10px;
  color: black;
  font-weight:bold;
  text-align: center;
  margin-bottom: 12px;
  width: 90%;
  margin: 0.3rem auto 0;

  &:hover {
    color: white;
    background: #0078e7;
    border: solid 1.5px #0078e7;
  }
`
 const SeeMoreText = styled(IngredientsText)`
  color: white;
  border: solid 1px black;
  background: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
`

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
export const RecipeComponent = (props) => {
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
          <Hr />
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