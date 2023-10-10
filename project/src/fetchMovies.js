


  export default async function getMovies(keywords, genre){
    console.log(keywords);
    const fetches = await Promise.all(keywords.map(keyword=> safeFetch("https://www.omdbapi.com/?s=" + keyword + "&apikey=351c6f1f")));
    const imdbID = fetches.map(x=>x.Search.map(y=>y.imdbID));
    const movieInfo = await Promise.all(imdbID.flat().map(id => safeFetch("https://www.omdbapi.com/?i=" + id + "&apikey=351c6f1f")));
    console.log(movieInfo);
  }

  async function safeFetch(url){
    return fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error('${url} returned status ${response.status}');
      }
      return response.json();
    });
  }