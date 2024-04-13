import { useState, useEffect } from "react";
import {
  useParams,
  useNavigate,
  NavLink,
  Outlet,
  useLocation,
} from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import HomePage from "../HomePage/HomePage";

import { FetchMovie } from "../../API/FetchMovies";

import css from "./MovieDetailsPage.module.scss";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState([]);
  const { title, vote_average, budget, poster_path, overview, genres } =
    movieDetails;

  useEffect(() => {
    const hendleMovie = async () => {
      try {
        const response = await FetchMovie(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    hendleMovie();
  }, []);

  const handleGoBack = () => {
    if (location.key === "default") {
      navigate("/movies", { replace: false });
    } else {
      navigate(-1, { replace: false });
    }
  };

  return (
    <>
      <div className="page">
        <div className="container">
          <div className={css.goback__cont}>
            <button onClick={handleGoBack}>
              <IoIosArrowBack /> Go back
            </button>
          </div>
          {movieDetails && (
            <>
              <div className={css.movie__cont}>
                {poster_path && (
                  <div className={css.movie__img}>
                    <img
                      src={"https://image.tmdb.org/t/p/w500/" + poster_path}
                      alt={title}
                    />
                  </div>
                )}
                <div className={css.movie__inform}>
                  <h1>{title}</h1>
                  <ul>
                    {vote_average > 0 && <li>Rating: {vote_average}</li>}
                    {budget > 0 && (
                      <li>Budget: ${budget.toLocaleString("en-US")}</li>
                    )}
                  </ul>
                  {overview && (
                    <div className={css.overview}>
                      <h2>Overview</h2>
                      <p>{overview}</p>
                    </div>
                  )}
                  {genres?.length > 0 && (
                    <div className={css.genresst}>
                      Genres:{" "}
                      {genres.map((genre, index) => {
                        return <div key={index}>{genre.name}</div>;
                      })}
                    </div>
                  )}
                </div>
              </div>
              <div className={css.aditionsl__inform}>
                <nav>
                  <NavLink to="cast" state={movieId} replace>
                    Cast
                  </NavLink>
                  <NavLink to="reviews" state={movieId} replace>
                    Reviews
                  </NavLink>
                </nav>
                <Outlet />
              </div>
            </>
          )}
        </div>
      </div>
      <HomePage />
    </>
  );
}

export default MovieDetailsPage;
