import { useState } from "react";
import classes from "./MovieForm.module.css";
import { Button } from "react-bootstrap";
const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const dateHandler = (event) => {
    setReleaseDate(event.target.value);
  };

  const obj={
    title:title,
    releaseDate:releaseDate,
    openingText:description,
  }

  const addmovieHandler=(e)=>{
    e.preventDefault();
    console.log(obj)
    props.onadd(obj)
  }

  return (
    <form className={classes.form} onSubmit={addmovieHandler}>
      <label>Title</label>
      <input type="text" onChange={titleHandler}></input>
      <label>Opening Text</label>
      <input type="text" onChange={descriptionHandler}></input>
      <label>Release Date</label>
      <input type="date" onChange={dateHandler}></input>
      <Button type="submit">Add Movie</Button>
    </form>
  );
};

export default MovieForm;
