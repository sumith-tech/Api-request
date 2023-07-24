import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState();
  const [error, setError] = useState(null);
  async function fetchMoviesHandler() {
    setError(null);
    setisLoading(true);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Somthing went wrong!");
      }
      const data = await response.json();
      const transformedData = data.results.map((moviesData) => {
        return {
          id: moviesData.episode_id,
          openingText: moviesData.opening_crawl,
          title: moviesData.title,
          releaseDate: moviesData.release_date,
        };
      });
      setMovies(transformedData);
    } catch (err) {
      setError(err.message);
    }
    setisLoading(false);
  }
  useEffect(fetchMoviesHandler, []);

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (isLoading) {
    content = <h2>Loading...</h2>;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
