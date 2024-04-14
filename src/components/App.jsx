import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

import Navigation from "./Navigation/Navigation";
import HomePage from "../pages/HomePage/HomePage";
import MovieCast from "./MovieCast/MovieCast";
import MovieReviews from "./MovieReviews/MovieReviews";

const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

import "./App.scss";

function App() {
  return (
    <Suspense
      fallback={
        <div className="loaderCont">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="white"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass="loaderCont"
          />
        </div>
      }
    >
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
