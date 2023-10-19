
  const API_KEY = "35c8008";


  export default async function getMovies(keywords, genre){
    console.log(keywords);
    const fetches = await Promise.all(keywords.map(keyword=> safeFetch("https://www.omdbapi.com/?s=" + keyword + "&apikey=" + API_KEY)));
    const falsyFetches = fetches.map(x=>x.Response === "False");
    if (!falsyFetches.includes("False")){
      const imdbID = fetches.map(x=>x.Search.map(y=>y.imdbID));
      const movieInfo = await Promise.all(imdbID.flat().map(id => safeFetch("https://www.omdbapi.com/?i=" + id + "&apikey="  + API_KEY)));
      return movieInfo;
    }else{
      console.log("feeeeeeel");
    }
  }

  async function safeFetch(url){
    return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(`${url} returned status ${response.status}`);
      }
      return response.json();
    });
  }