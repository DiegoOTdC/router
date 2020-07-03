import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "../components/SearchResult";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, set_movies] = useState();

  const search = async () => {
    console.log("Start searching for:", searchText);

    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);

    // Option A: use the browser-native fetch function
    //  const data = await fetch(
    //    `https://omdbapi.com/?apikey=b3d9013d&s=${queryParam}`
    //  ).then((r) => r.json());

    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://omdbapi.com/?apikey=7e7d1a01&s=${queryParam}`
    );

    console.log("response test:", response);
    const { data } = response;
    console.log("data test:", data);
    const { Search } = data;
    console.log("search test:", Search);
    // const movieTitles = Search.map((movie) => {
    //   return (
    //     <h2>
    //       {movie.Title} {movie.Poster} {movie.imdbID}
    //     </h2>
    //   );
    // });
    //console.log("Movie title test:", movieTitles);

    set_movies(Search);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {movies
        ? movies.map((movie) => (
            <SearchResult
              title={movie.Title}
              poster={movie.Poster}
              id={movie.imdbID}
              key={movies.indexOf(movie)}
            />
          ))
        : "Loading"}
    </div>
  );
}
