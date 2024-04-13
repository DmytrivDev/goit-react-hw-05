import MovieItem from "../MovieItem/MovieItem";

import css from "./MovieList.module.scss";

function MovieList({ movies }) {
  return (
    <ul className={css.movies__list}>
      {movies.map((item) => {
        return <MovieItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default MovieList;
