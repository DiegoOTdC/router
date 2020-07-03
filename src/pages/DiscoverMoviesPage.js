import React, { useState, useEffect } from "react"; //dont use UseEffect van fetching
import axios from "axios";
import Timeout from "await-timeout";
import { useParams, useHistory, NavLink } from "react-router-dom";

//1. Export default function
export default function DiscoverMoviesPage() {
  //name in capital
  const [searchText, set_searchText] = useState("");
  //define a new state
  const [searchState, set_searchState] = useState("Search for movies"); //there is nothing here yet
  //define new variable for movies, show them in state.
  const [movies, set_movies] = useState([]); // data fetched will be set in this array
  const params = useParams(); //to get the parameter after the discovermoviespage on the app,js
  const history = useHistory();
  console.log("searchState test:", searchState);

  console.log("what are my params:", params.searchText);

  const search = async () => {
    console.log("Start searching for:", searchText);

    //Best practice: encode the string so that special characters like '& and ? don't accidentally mess up the URL

    set_searchState("Searching..."); //Before fetched is searching
    await Timeout.set(2000); //helps with time whilst searching

    //option B: use the 'axios' library
    const response = await axios.get(
      `https://omdbapi.com/?s=${params.searchText}&apikey=7e7d1a01`
    );

    const { data } = response;
    const { Search } = data;

    console.log("Success!", Search);

    set_movies(Search);
    set_searchState("Done");
  };

  useEffect(() => {
    search();
  }, [params.searchText]);

  const newSearchFunctionInAdressbar = () => {
    const queryParam = encodeURIComponent(searchText); //<-- search what is based on params
    history.push(`/DiscoverMoviesPage/${queryParam}`);
  };

  console.log("movies test:", movies);

  const displayMovies = movies
    ? movies.map((movieCard) => {
        return (
          <NavLink
            className="col-md-4"
            to={`/movie/${movieCard.imdbID}`}
            key={movieCard.imdbID}
          >
            <div className="card">
              <img src={movieCard.Poster} alt="Movie Poster:"></img>
              <div className="card-body">
                <p>{movieCard.Title}</p>
                <p>{movieCard.Year}</p>
              </div>
            </div>
          </NavLink>
        );
      })
    : "";

  console.log("displayMovies:", displayMovies);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <h3>{searchState}</h3>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={newSearchFunctionInAdressbar}>Search</button>
      </p>
      <div className="container">
        <div className="row">{displayMovies}</div>
      </div>
    </div>
  );
}
