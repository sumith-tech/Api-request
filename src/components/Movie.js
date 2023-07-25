import React from "react";

import classes from "./Movie.module.css";
import { Button } from "react-bootstrap";

const Movie = (props) => {
  const deleteHandler = (event) => {
    props.ondelete(event.target.value);
    
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <Button variant="danger" value={props.id} onClick={deleteHandler}>
        Delete
      </Button>{" "}
    </li>
  );
};

export default Movie;
