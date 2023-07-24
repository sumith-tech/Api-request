import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState();

  async function fetchMoviesHandler() {
    setisLoading(true)
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedData = data.results.map((moviesData) => {
      setisLoading(false)
      return {
        id: moviesData.episode_id,
        openingText: moviesData.opening_crawl,
        title: moviesData.title,
        releaseDate: moviesData.release_date,
      };
    });
    setMovies(transformedData);
    console.log(movies);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && <MoviesList movies={movies} />}
        {isLoading && <h2>Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
