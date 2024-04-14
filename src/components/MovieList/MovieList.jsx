import { Link, useLocation } from "react-router-dom";

import MovieItem from "../MovieItem/MovieItem";

import css from "./MovieList.module.scss";

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movies__list}>
      {movies.map((item) => {
        const { id, title, poster_path } = item;
        return (
          <li key={id} className={css.movie__item}>
            <Link to={`/movies/${id}`} className={css.movieitem__img} state={location}>
              {poster_path && (
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                  alt={title}
                />
              )}
            </Link>
            <Link to={`/movies/${id}`} className={css.movieitem__name} state={location}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieList;
