import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export default function MoviePage() {
  const params = useParams();
  const [movieData, set_movieData] = useState({});
  console.log("what are params", params.imdb_id); // params is object... we use imdb_id in app.js, thats why we use it here..
  //whenever params change, fetch new data. or when you get here.. fetch the data. use useEffect

  //fetch the data // got to the manual of omdb API... search by id... then http://www.omdbapi.com/?i=tt0880684 -> still have to include your apikey
  const getData = async () => {
    const response = await Axios.get(
      `http://www.omdbapi.com/?i=${params.imdb_id}&apikey=7e7d1a01`
    );

    set_movieData(response.data);
  };

  useEffect(() => {
    console.log("use effect running");
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const { Year, Title, Poster, Plot, Actors, Awards } = movieData;

  return (
    <div>
      <h1>details page</h1>
      <h2>
        {Title} - {Year}
      </h2>
      <img src={Poster} alt="Movie Poster" />
      <p>
        {Actors} <br></br>
        {Awards}
      </p>
      <p>{Plot}</p>
    </div>
  );
}
