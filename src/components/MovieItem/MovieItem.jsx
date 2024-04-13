import { Link } from "react-router-dom";

import css from "./MovieItem.module.scss";

function MovieItem({ item }) {
  const { id, title, poster_path } = item;

  return (
    <li className={css.movie__item}>
      <Link to={`/movies/${id}`} className={css.movieitem__img}>
        {poster_path && <img src={"https://image.tmdb.org/t/p/w500/" + poster_path} alt={title} />}
      </Link>
      <Link to={`/movies/${id}`} className={css.movieitem__name}>
        {title} 
      </Link>
    </li> 
  );
}

export default MovieItem;
