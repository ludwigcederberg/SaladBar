import { useState } from "react"
import getMovies from "./fetchMovies";

export default function Form ({genres, keywords}) {

  const [chosenWords, setChosenWords] = useState([]);
  const [genre, setGenre] = useState('action');
  const [movieLength, setMovieLength] = useState(125);
  const [rating, setRating] = useState(5);
  const [movieTitles, setMovieTitles] = useState([]);
  


  const handleBoxChange = (e) => {
    const {id} = e.target;
    if (!chosenWords.includes(id)){
      setChosenWords([...chosenWords, id]);
    } else {
      const updatedChosenWords = chosenWords.filter(word => word !== id);
      setChosenWords(updatedChosenWords);
    }
  }

  const handleSelectChange = (e) => {
    const {value} = e.target;
    setGenre(value);
  }

  function filterAfterSpec(mi){
    console.log(mi);
    const sortedAfterTime = mi.map(movie => [movie.Title, movie.Runtime.replace(' min', ''), movie.imdbRating, movie.Genre])
    .filter(x => parseInt(x[1]) < movieLength)
    .filter(x => parseInt(x[2]) > rating);
    //.filter(x => x[3].includes(genre));
    console.log(sortedAfterTime);
    return sortedAfterTime;

  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mi = await (getMovies(chosenWords, genre));
    const shortMovies = filterAfterSpec(mi);
    setMovieTitles(shortMovies.map(x => x[0]));
    
  }

  return (
    <div className="container-fluid inline">
      <form onSubmit={handleSubmit}>
        <div className="checkbox-row" key="keywords">
          {keywords.map((x,i) => <span key={x}>
            <input type="checkbox" className="btn-check" id={x} i={i} onChange={handleBoxChange} />
            <label className="btn btn-outline-primary" htmlFor={x} value={x}>
              {x}
            </label>
          </span>)}
        </div>
        <br/>
        <div className="form-floating" key="genres">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleSelectChange} key="genreSelect">
            {genres.map(x => <option value={x} key={x}>{x}</option>)}
          </select>
        <label htmlFor="floatingSelect">Genre</label>
        <br></br>
        </div>
        <div >
          <label className="form-label">Movie length</label>
          <input type= 'range' min= '0' max= '250' step='5' className="form-range" value= {movieLength} onChange= {(e)=>setMovieLength(e.target.value)}/> 
          <p> 0 - {movieLength} minutes</p>
        </div>
        <div >
          <br></br>
          <label className="form-label">IMDb rating</label>
          <input type= 'range' min= '0' max= '10' step='0.1' className="form-range" value= {rating} onChange= {(e)=>setRating(e.target.value)}/> 
          <p> {rating} - 10 rating</p>
        </div>
        <br/>
        <div className="form-floating container d-flex align-items-center justify-content-center" key="submit">
          <button type='submit' className="btn btn-primary" >Search</button>
        </div>
      </form>
      <div className="container-fluid inline">
        {movieTitles ? movieTitles.map(title => <li key={title}>{title}</li>) : <div></div>}
      </div>
    </div>
  )
}