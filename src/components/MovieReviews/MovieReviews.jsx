import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewsItem from "../ReviewsItem/ReviewsItem";

import { FetchMoviereviews } from "../../API/FetchMovies";

import css from "./MovieReviews.module.scss";

function MovieReviews() {
  const params = useParams();

  const [movieRevs, setMovieRevs] = useState([]);
  const movieId = params.movieId;

  useEffect(() => {
    const hendleMovieRevs = async () => {
      try {
        const response = await FetchMoviereviews(movieId);
        setMovieRevs(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    hendleMovieRevs();
  }, [movieId]);


  return (
    <ul className={css.revs__list}>
      {movieRevs.length > 0 ? (
        movieRevs.map((rev) => {
          return <ReviewsItem key={rev.id} item={rev} />;
        })
      ) : (
        <div className="noFound">Nothing found</div>
      )}
    </ul>
  );
}

export default MovieReviews;
