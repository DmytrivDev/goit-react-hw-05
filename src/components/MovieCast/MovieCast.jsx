import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CostItem from "../CostItem/CostItem";

import { FetchMovieCast } from "../../API/FetchMovies";

import css from "./MovieCast.module.scss";

function MovieCast() {
  const location = useLocation();

  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const hendleMovieCast = async () => {
      try {
        const response = await FetchMovieCast(location.state);
        setMovieCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    hendleMovieCast();
  }, []);

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
