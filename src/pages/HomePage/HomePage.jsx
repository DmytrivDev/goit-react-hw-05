import { useEffect, useState } from "react";

import MovieList from "../../components/MovieList/MovieList";

import { FetchTopMovies } from "../../API/FetchMovies";

import css from "./HomePage.module.scss";

function HomePage() {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const hendleTopMovies = async () => {
      try {
        const response = await FetchTopMovies();
        setTopMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    hendleTopMovies();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <h1>Top movies</h1>
        {topMovies?.length > 0 && <MovieList movies={topMovies} />}
      </div>
    </div>
  );
}

export default HomePage;
