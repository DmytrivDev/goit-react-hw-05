import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import MovieList from "../../components/MovieList/MovieList";

import { FetchSearchMovie } from "../../API/FetchMovies";

import css from "./MoviesPage.module.scss";

function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get("search");

  const hendleSubmit = (evt) => {
    evt.preventDefault();

    const word = evt.target.elements.search.value;

    setSearchParams({ search: word });
  };

  useEffect(() => {
    const hendleSearchMovie = async () => {
      try {
        const response = await FetchSearchMovie(searchWord);
        setSearchedMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    hendleSearchMovie();
  }, [searchWord]);

  return (
    <div className="page">
      <div className="container">
        <form onSubmit={hendleSubmit} className={css.movie__form}>
          <input type="search" name="search" placeholder="Type your movie" />
          <button type="submit">Submit</button>
        </form>
        {searchWord && (
          <div className={css.search__cont}>
            <h1>Searched by "{searchWord}"</h1>
            {searchedMovies?.length > 0 && <MovieList movies={searchedMovies} />}
          </div>
        )} 
      </div>
    </div>
  );
}

export default MoviesPage;
