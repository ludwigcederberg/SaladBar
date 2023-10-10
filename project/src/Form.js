import { useState } from "react"
import getMovies from "./fetchMovies";
import RangeSlider from "./RangeSlider";
import SelectGenre from "./SelectGenre";


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
    .filter(x => parseInt(x[2]) > rating)
    .filter(x => x[3].includes(genre));
    console.log(sortedAfterTime);
    return sortedAfterTime;

  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.classList.add("was-validated");
    const mi = await (getMovies(chosenWords, genre));
    const shortMovies = filterAfterSpec(mi);
    setMovieTitles(shortMovies ? shortMovies.map(x => x[0]) : []);
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="container-fluid inline">
      <form className="g-3 needs-validation" onSubmit={handleSubmit} noValidate>
        <div className="checkbox-row" key="keywords">
          {keywords.map((x,i) => <span key={x}>
            <input type="checkbox" className="btn-check" id={x} i={i} onChange={handleBoxChange} />
            <label className="btn btn-outline-primary" htmlFor={x} value={x}>
              {x}
            </label>
          </span>)}
        </div>
        <br/>
        <div className="form-floating" key="randomize-button">
          <button className="btn btn-primary" onClick={refreshPage}>Randomize words!</button>
        </div>
        <br/>
        <div >
          <SelectGenre id="floatingSelect" label="Choose genre" options={genres} value={genre} onChange={handleSelectChange} errorMessage="Please select a genre" required/>
          <br></br>
        </div>
        <div >
          <RangeSlider label="Movie length" step={5} min={0} max={250} value={movieLength} onChange={setMovieLength}/>
          <p> 0 - {movieLength} minutes</p>
          <br></br>
          <RangeSlider label="IMDb rating" step={0.1} min={0} max={10} value={rating} onChange={setRating}/>
          <p> {rating} - 10 rating</p>
        </div>
        <div className="form-floating container d-flex align-items-center justify-content-center" key="submit">
          <button type='submit' className="btn btn-primary" >Search</button>
        </div>
      </form>
      <div className="container-fluid inline">
        {movieTitles ? movieTitles.map(title => <li key={title}>{title}</li>) : <div></div>}
      </div>
    </div>
  )}