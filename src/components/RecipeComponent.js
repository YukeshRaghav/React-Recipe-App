
import styled from 'styled-components';


export const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: space-evenly;
  gap: 20px;
`

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;
border-radius : 30px;
${'' /* border: 1px solid black; */}
`

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 25px ;

`

export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
  text-align: center;
  margin-top: 1rem;

`
export const IngredientsText = styled.span`
  font-size: 18px;
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
`
export const SeeMoreText = styled(IngredientsText)`
  color: white;
  border: solid 1px black;
  background: black;
  margin-top: 1rem;
  margin-bottom: 1rem;
  
`