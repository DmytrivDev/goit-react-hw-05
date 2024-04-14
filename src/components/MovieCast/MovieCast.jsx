import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import CostItem from "../CostItem/CostItem";

import { FetchMovieCast } from "../../API/FetchMovies";

import css from "./MovieCast.module.scss";

function MovieCast() {
  const params = useParams();

  const [movieCast, setMovieCast] = useState([]);
  const movieId = params.movieId;

  useEffect(() => {
    const hendleMovieCast = async () => {
      try {
        const response = await FetchMovieCast(movieId);
        setMovieCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    hendleMovieCast();
  }, [movieId]);

  return (
    <ul className={css.cast__list}>
      {movieCast.length > 0 ? (
        movieCast.map((person) => {
          return <CostItem key={person.id} item={person} />;
        })
      ) : (
        <div className="noFound">Nothing found</div>
      )}
    </ul>
  );
}

export default MovieCast;
