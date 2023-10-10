import { useState } from "react"
import getMovies from "./fetchMovies";

export default function Form ({genres, keywords}) {

  const [chosenWords, setChosenWords] = useState([]);
  const [genre, setGenre] = useState('action');
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

  async function handleSubmit(e) {
    e.preventDefault();
    const mi = await (getMovies(chosenWords, genre));
    const titles = mi.map(x => x.Title);
    console.log(titles);
    setMovieTitles(titles);
    
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
        </div>
        <div className="form-floating container d-flex align-items-center justify-content-center" key="range">

        </div>
        <br/>
        <div className="form-floating container d-flex align-items-center justify-content-center" key="submit">
          <button type='submit' className="btn btn-primary" >Sök</button>
        </div>
      </form>
      <div className="container-fluid inline">
        {movieTitles ? movieTitles.map(title => <li key={title}>{title}</li>) : <div></div>}
      </div>
    </div>
  )
}