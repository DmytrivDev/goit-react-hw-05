import axios from "axios";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzU5OGJlNDEzMzlhNmRiOTkxN2UzNjc3MGQzMTRhZiIsInN1YiI6IjY2MWE2NDZmYWY2ZTk0MDE0YWVjYjdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Osp-RnMlj0EQvxR4LB8MvuT8bgPwW7SWiKi2r5b6oc8";
const BASE_URL = "https://api.themoviedb.org/";

const options = {
  headers: {
    Authorization: 'Bearer '+API_TOKEN
  }
};

export const FetchTopMovies = async () => {
  const trandUrl = BASE_URL + '3/trending/movie/day'
  const data = await axios.get(trandUrl, options);

  return data;
};

export const FetchMovie = async (movieID) => {
  const trandUrl = BASE_URL + '3/movie/'+movieID;
  const data = await axios.get(trandUrl, options);

  return data;
};

export const FetchMovieCast = async (movieID) => {
  const trandUrl = BASE_URL + '3/movie/'+movieID+'/credits';
  const data = await axios.get(trandUrl, options);

  return data;
};

export const FetchMoviereviews = async (movieID) => {
  const trandUrl = BASE_URL + '3/movie/'+movieID+'/reviews';
  const data = await axios.get(trandUrl, options);

  return data;
};

export const FetchSearchMovie = async (word) => {
  const trandUrl = BASE_URL + '3/search/movie?query='+word;
  const data = await axios.get(trandUrl, options);

  return data;
};