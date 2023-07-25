import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const ondeleteHandler = (id) => {
    props.onDeleteMovie(id);
    console.log(id)
  };

  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          ondelete={ondeleteHandler}
        />
      ))}
    </ul>
  );
};

export default MovieList;
