import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReviewsItem from "../ReviewsItem/ReviewsItem";

import { FetchMoviereviews } from "../../API/FetchMovies";

import css from "./MovieReviews.module.scss";

function MovieReviews() {
  const location = useLocation();

  const [movieRevs, setMovieRevs] = useState([]);

  useEffect(() => {
    const hendleMovieRevs = async () => {
      try {
        const response = await FetchMoviereviews(location.state);
        setMovieRevs(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    hendleMovieRevs();
  }, []);


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
