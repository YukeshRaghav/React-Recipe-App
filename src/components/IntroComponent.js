import {MyTypedComponent} from './TypedComponent';
import './Intro.css';


// function SuggestionClick(){
//   console.log(e.innerHTML)
// }

export function IntroComponent(props) {
    return(
        <div className='container'>
            <h1 className='cookLike introHeader'>Cook like a Chef</h1>
            <p className='enterThe searchText'>Enter the name of the Recipe you need to
search ... <MyTypedComponent className="typed"></MyTypedComponent></p>
<div className='searchComponent-intro'>
        <img className='searchIcon-intro' src='/search.svg' alt='search icon'/>
        <input className='searchInput-intro' placeholder='Search Recipes' onChange={props.change}/>
      </div>

      <p className='intro-eg' >Eg : <span className='span-intro' >Chicken</span> <span className='span-intro' >Fish</span> <span className='span-intro' >Egg</span></p>
        </div>
    )
}