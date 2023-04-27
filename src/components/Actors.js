import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsItems = actors.map((actor) => {
    return(
      <Actor
      key={actor.name}
      name={actor.name}
      movies={actor.movies}
      />
    )
  })

  return(
     <div>
      <h1>Actors Page</h1>
      <div>{actorsItems}</div>
     </div>
  )
}

function Actor({name, movies}) {
  const moviesList = movies.map((movie) => (
    <li key={movie}>{movie}</li>
  ))

  return(
    <div>
      <h4>{name}</h4>
      <ul>{moviesList}</ul>
    </div>
  )

}

export default Actors;
