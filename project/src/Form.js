import { useState } from "react"
import getMovies from "./fetchMovies";
import RangeSlider from "./RangeSlider";
import SelectGenre from "./SelectGenre";
import { useOutletContext } from "react-router-dom";
import SelectVideoType from "./SelectVideoType";


export default function Form () {


  const props = useOutletContext();
  const genres = props.genres
  const keywords = props.keywords
  const [chosenWords, setChosenWords] = useState([]);
  const [genre, setGenre] = useState('action');
  const [movieLength, setMovieLength] = useState(125);
  const [rating, setRating] = useState(5);
  const [movieTitles, setMovieTitles] = useState([]);
  const [videoType, setVideoType] = useState([]);
  const [movieVector, setMovieVector] = useState([]);

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
    const sortedAfterTime = mi.map(movie => [movie.Title, movie.Runtime.replace(' min', ''), movie.imdbRating, movie.Genre, movie.Type, movie.Poster, movie.Plot])
    .filter(x => parseInt(x[1]) < movieLength)
    .filter(x => parseInt(x[2]) > rating)
    .filter(x => x[3].includes(genre))
    .filter(x => x[4].includes(videoType));
    console.log(sortedAfterTime);
    return sortedAfterTime;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    e.target.classList.add("was-validated");
    const mi = await (getMovies(chosenWords, genre));
    const shortMovies = filterAfterSpec(mi);
    setMovieTitles(shortMovies ? shortMovies.map(x => x[0]) : []);
    setMovieVector([...shortMovies]);
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
        <div>
          <SelectGenre id="floatingSelect" label="Choose genre" options={genres} value={genre} onChange={handleSelectChange} errorMessage="Please select a genre" required/>
          <br></br>
        </div>
        <div className="container d-flex align-items-center justify-content-center grid gap-0 column-gap-3">
          <SelectVideoType id= "series" label= "Series" onChange={() => setVideoType('series')} />
          <SelectVideoType id= "movie" label= "Movie"  onChange={() => setVideoType('movie')} />
          <SelectVideoType id= "both" label= "Both" checked = {true} onChange={() => setVideoType('')} />
        </div>
        <div>
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
      <br/>
      <div id="" className="row">
      {movieVector.map(x => 
          <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}} >
              <img src={x[5]} className="card-img-top" alt={x[0]}/>
              <div className="card-body">
                <h5 className="card-title">{x[0]}</h5>
                <p className="card-text">{x[6]}</p>
                <a href="#" className="btn btn-primary">Favorite</a>
              </div>
            </div>
            </div>
           ) }
        </div>
    </div>
  )}