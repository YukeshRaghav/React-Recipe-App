
import styled from 'styled-components';
import {MyTypedComponent} from './TypedComponent';
import { SearchComponent, SearchIcon, SearchInput} from './HeaderComponent';

const Container = styled.div`
    width: 60%;
    border: 1px solid black;
    margin-top: 5rem; 
    border-radius: 25px;
    background-image: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('https://img.freepik.com/free-vector/people-ordering-food-cafe-online_74855-5913.jpg?w=1060&t=st=1684771706~exp=1684772306~hmac=137e66004af57f659d68e92409d926353454a84ed6933571bd4fd9b6826ab866');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: 0 3px 10px 0 #aaa;
    padding-right: 2rem;

  


`
 
const IntroHeader = styled.h1`
    font-family: 'Rubik Puddles', cursive;
    font-size: 3rem;
    margin: 4rem 4rem 2rem 4rem;

    @media (max-width: 824px)  {
        font-size: 2.5rem;
}   

@media (max-width: 640px)  {
        font-size: 2rem;
} 
`
const SearchText = styled.p`
    font-weight: semi-bold;
    font-size: 1.5rem;
    margin: 0rem 2rem 0 4rem;

    @media (max-width: 640px)  {
        font-size: 1rem;
} 
`

const SearchStyle = {
    margin:"2rem auto 0 4rem",
    width: "80%",
}

const spanStyle = {
    border: "1px solid black",
    padding: "0.5rem 1rem",
    margin: "0 1rem",
    fontWeight: "bold",
    borderRadius: "25px",
    boxShadow: "0 3px 10px 0 #aaa",
    cursor:  "pointer",
}


const pStyle = {
    margin:"2rem 0 4rem 4rem",
}


// function SuggestionClick(){
//   console.log(e.innerHTML)
// }

export function IntroComponent(props) {
    return(
        <Container className='introCom-container'>
            <IntroHeader className='cookLike'>Cook like a Chef</IntroHeader>
            <SearchText className='enterThe'>Enter the name of the Recipe you need to
search ... <MyTypedComponent className="typed"></MyTypedComponent></SearchText>
<SearchComponent className='introSearch' style={SearchStyle}>
        <SearchIcon src='/search.svg'/>
        <SearchInput className='searchInput' placeholder='Search Recipes' onChange={props.change}/>
      </SearchComponent>

      <p className='intro-eg' style={pStyle}>Eg : <span className='span' style= {spanStyle}>Chicken</span> <span className='span' style= {spanStyle}>Fish</span> <span className='span' style= {spanStyle}>Egg</span></p>
        </Container>
    )
}