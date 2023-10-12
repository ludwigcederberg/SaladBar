import { useOutletContext } from "react-router-dom"

function MovieList () {

const {movieVector} = useOutletContext();

return (
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


)
}

export default MovieList